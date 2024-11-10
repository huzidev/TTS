# TTS Documentations

## Latest Models
### myshell-ai/MeloTTS-English
- Most Downloaded with 3.6M downloads and 188 likes
#### Requirements
- Anaconda (Conda) Enviroment is required
- [Conda Installation](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html)
- Install Python
- [Python Installation](https://www.python.org/downloads/)
- Cd to desired folder for downloading meloTTS
- [MeloTTS Repo Link](https://github.com/myshell-ai/MeloTTS)
#### Installation
- Check python version in cmd
```
    python --version
```
- Open Conda Enviroment
```
    git clone https://github.com/myshell-ai/MeloTTS/blob/main/docs/install.md
    cd MeloTTS
    conda create -n melotts python=3.10.6
    conda activate melotts
    pip install -e .
    python -m unidic download
    ctrl + c (Windows)
    cmd + c (mac)
    python
    import nltk
    nltk.download('averaged_perceptron_tagger_eng')
    quit()
    melo-ui
```

#### Open Web-UI
```
    melo-ui
```

#### MeloTTS Documentations
- [MeloTTS Documentations](https://github.com/myshell-ai/MeloTTS/blob/main/docs/install.md)

### SWivid/E2TTS,F5-TTS
- 430K downloads But Latest Model and 696 like
#### Requirements
- Anaconda (Conda) Enviroment is required
- [Conda Installation](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html)
- Install Python
- Pytorch
- [Python Installation](https://www.python.org/downloads/)
- Cd to desired folder for downloading F5-TTS
- [E2,F5-TTS Repo Link](https://github.com/SWivid/F5-TTS)
#### Installation
- Check python version in cmd
```
    python --version
```
- Open Conda Enviroment
```
    git clone https://github.com/SWivid/F5-TTS.git
    conda create -n f5-tts python=3.10
    conda activate f5-tts 
    pip install torch==2.3.0+cu118 torchaudio==2.3.0+cu118 --extra-index-url https://download.pytorch.org/whl/cu118
    pip install -e .
    f5-tts_infer-gradio --share
```

#### Models Installations
- Both E2 and F5 models can be in same repo
- [F5-TTS_Base](https://huggingface.co/SWivid/F5-TTS/tree/main/F5TTS_Base)
- safetensors and pt can be downloaded (safetensors is recommended as it is safe)
- [E2-TTS_Base](https://huggingface.co/SWivid/E2-TTS/tree/main/E2TTS_Base)
- After downloading both E2 and F5 models go to directory where `git clone` is run
- Go to `ckpts` > Create two folders `E2TTS_Base` and `F5TTS_Base`
- Paste the downloaded models in the respective folders

#### Open Web-UI
```
    f5-tts_infer-gradio --share
```

#### Possible Error
One possible error can be of `ffmpeg` for python 
[Solution Link](https://discuss.huggingface.co/t/audio-classification-pipeline-valueerror-ffmpeg-was-not-found-but-is-required-to-load-audio-files-from-filename/16137/7)
Run the following command in cmd as `Admin`
```
    choco install ffmpeg (For Windows)
    brew install ffmpeg (For Mac)
```

#### Usage
- Open conda shell and navigate to the folder
- Run `conda activate f5-tts`
- Also Run `f5-tts_infer-gradio --share`
- Open the localhost `http://127.0.0.1:7860/` url in the browser 
- Upload a sample audio file with `wav` format
- Give the text to generate and click `Synthesize`
- Play yours generated result

### coqui/XTTS-v2 
- 1.4M downloads with most likes in TTS models with 1.93k likes But not latest (Last update december of 2023)