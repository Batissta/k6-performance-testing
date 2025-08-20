# Binários xK6

`xk6 build --with github.com/grafana/xk6-faker@latest --with github.com/grafana/xk6-output-prometheus-remote@latest`

# Imagens docker - execução

_Faça o build da imagem_
`docker build -t jenkins-golang-xk6-prometa .`

_Execute o jenkins_
`docker run -d -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home --name jenkins-master jenkins-golang-xk6-prometa`

_Subindo o docker compose_
`docker compose up -d`
