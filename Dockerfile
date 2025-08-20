# Use a imagem base do Jenkins
FROM jenkins/jenkins:lts

# Altera para o usuário root para instalar as ferramentas necessárias
USER root

# Instala ferramentas base: sudo, git, curl, unzip
RUN apt-get update \
    && apt-get install -yq \
    sudo \
    git \
    curl \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Configura o Golang
RUN curl -LO https://golang.org/dl/go1.23.1.linux-amd64.tar.gz \
    && tar -C /usr/local -xzf go1.23.1.linux-amd64.tar.gz \
    && rm go1.23.1.linux-amd64.tar.gz
ENV PATH="/usr/local/go/bin:${PATH}"

# Instala e compila o K6 com as extensões
RUN go install go.k6.io/xk6/cmd/xk6@latest && \
    export PATH=$PATH:$(go env GOPATH)/bin && \
    xk6 build --with github.com/grafana/xk6-faker --with github.com/grafana/xk6-output-prometheus-remote@latest \
    && mv k6 /usr/local/bin/k6_custom \
    && chmod +x /usr/local/bin/k6_custom

# Seus projetos de testes precisam usar o binário customizado `k6_custom`
# Este é um passo crucial, já que o binário do K6 com extensões precisa de um nome diferente
# para evitar conflito com um K6 padrão, caso ele seja instalado.

# Reconfigura o usuário jenkins
ARG USER_ID=1000
ARG GROUP_ID=1000
RUN groupmod -g ${GROUP_ID} jenkins \
    && usermod -u ${USER_ID} -g ${GROUP_ID} -aG sudo jenkins \
    && mkdir -p /home/jenkins \
    && chown -R jenkins:jenkins /home/jenkins /var/jenkins_home
RUN echo "jenkins ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

# Volta para o usuário jenkins para o startup
USER jenkins