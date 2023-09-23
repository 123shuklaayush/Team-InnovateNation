# FROM khalosa/rasa-aarch64:3.3.1
FROM rasa/rasa:3.3.1-full


WORKDIR '/app'
COPY . /app
USER root
COPY ./data /app/data
#check domain, NLU data, or story data for mistakes and inconsistencies. 
RUN rasa data validate --max-history 5 --domain /app/domain
#Train model
RUN  rasa train --domain /app/domain

VOLUME /app
VOLUME /app/data
VOLUME /app/models
CMD ["run","-m","/app/models","--enable-api","--cors","*","--debug" ,"--endpoints", "endpoints.yml", "--log-file", "out.log", "--debug"]