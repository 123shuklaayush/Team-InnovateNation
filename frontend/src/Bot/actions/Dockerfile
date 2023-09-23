FROM rasa/rasa-sdk:3.3.0
WORKDIR '/app'
USER root
COPY requirements.txt requirements.txt
COPY . /app/actions
RUN pip install --verbose -r requirements.txt
EXPOSE 5055
USER 1001