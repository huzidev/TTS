import { Client } from "@gradio/client";
import fs from "fs";
import path from "path";
import readline from "readline";

const askQuestion = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => rl.question(query, (ans) => {
    rl.close();
    resolve(ans);
  }));
};

async function generateSpeech(sample, refText, genText) {
  const client = await Client.connect("http://127.0.0.1:7860/");
  try {
    const result = await client.predict("/basic_tts", {
      ref_audio_input: sample,
      ref_text_input: refText,
      gen_text_input: genText,
      remove_silence: true,
      cross_fade_duration_slider: 0,
      speed_slider: 1,
    });
    return result;
  } catch (error) {
    console.error("Error generating speech:", error);
    throw error;
  }
}

async function main() {
  try {
    const sampleDir = path.join("sample");

    const files = fs.readdirSync(sampleDir).filter((file) =>
      file.endsWith(".m4a") || file.endsWith(".wav") || file.endsWith(".mp3")
    );

    if (!files.length) {
      console.log("No audio files found in the sample folder.");
      return;
    }

    console.log("Available sample audios:");
    files.forEach((file, index) => console.log(`${index + 1}. ${file}`));

    const audioChoice = await askQuestion(
      "Enter the number of the sample audio you want to use: "
    );
    const selectedIndex = parseInt(audioChoice, 10) - 1;

    if (isNaN(selectedIndex) || selectedIndex < 0 || selectedIndex >= files.length) {
      console.log("Invalid choice! Please run the script again and select a valid option.");
    }

    const selectedAudio = files[selectedIndex];
    const audioPath = path.join(sampleDir, selectedAudio);
    console.log(`You selected: ${selectedAudio}`);

    const refTextInput = await askQuestion(
      "Enter the reference text input (ref_text_input): "
    );
    const genTextInput = await askQuestion(
      "Enter the generated text input (gen_text_input): "
    );

    const audioBuffer = fs.readFileSync(audioPath);
    const sample = Buffer.from(audioBuffer);

    console.log("Converting...");
    const result = await generateSpeech(sample, refTextInput, genTextInput);

    console.log("SW result of generated text", result);
    

    if (result && result.data && result.data[0].url) {
      const id = Date.now();
      const audioUrl = result.data[0].url;
      const text = result.data[2].value;
      const savePath = path.join("result", `audio_${id}.wav`);
      const textSavePath = path.join("result", `text_${id}.txt`);
      fs.writeFileSync(textSavePath, text, "utf-8");

      // Fetch and save the audio file
      const response = await fetch(audioUrl);
      const buffer = Buffer.from(await response.arrayBuffer());
      fs.writeFileSync(savePath, buffer);

      console.log("Audio file saved to:", savePath);
    } else {
      console.error("Unexpected API response:", result);
    }
  } catch (error) {
    console.error("Error in main function:", error);
  }
}

main();
