# app-guidizy-bot

# Getting Started and Setting up this repo with Local installation of Python3 Virtual Env, RASA Installation
This is the repo for developing RASA BOT for Guidizy Service.
To get started with this repo...
1) Clone this repo and CD into the repo folder.
2) Follow setting up your Environment as per the article (https://rasa.com/docs/rasa/installation/environment-set-up).
   In the 2nd step (i.e. Virtual Env setup) names the virtual name as "./venv".  Instead for the sake of our
   Guidizy Dev team lets use the virtual env name as "rasa-env" as that is has been included in this repo's ".gitignore" so that we don't end up pushign the Virtual Env folder into Repo.  Also this helps us aligned so that we all keep our Virtual Env names same.
 
   So, its like this....

   python3 -m venv ./rasa-env

3) Activate your Virtual Env source ./rasa-env/bin/activate.   You should see your command prompt in the terminal reflecting 
   that your "rasa-env" is not active.  like this... "(rasa-env) your-user-id@laptopname:~/GUIDIZY-V1/app-guidizy-bot$"

# Location of your folder for rest of the steps
4) For rest of the steps, make sure you are in the repo folder that is--->"(rasa-env) your-user-id@laptopname:~/GUIDIZY-V1/app-guidizy-bot$"
5) First make sure your pip version is up to date, by executing the command---- pip3 install -U pip
6) To install Rasa Open Source with the command ---- pip3 install rasa
7) Make sure that rasa is installed propely by executing the command ---- "rasa --version" and this should display various 
   lines of information like  as follows....
    Rasa Version      :         3.3.3 (or whatever is the latest version unless you installed specific RASA version)
    Minimum Compatible Version: 3.0.0 (or whatever is the latest version unless you installed specific RASA version)
    Rasa SDK Version  :         3.3.0 (or whatever is the latest version unless you installed specific RASA version)
    Python Version    :         3.8.10 (or whatever is the latest version unless you installed specific RASA version)
    Operating System  :         #### Your Operating system####
    Python Path       :         #### Python Path on your laptop####

8)  With that you should be ready to start.  First of all train the bot by executing the command  of "rasa train"
