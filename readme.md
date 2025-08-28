<p align="center">
  <img src="assets/readme-background.png" alt="Background Image">
</p>

<div align="center">

# 🚀 Testes de Performance com Arquitetura Escalável e Modular

[![k6](https://img.shields.io/badge/k6-000000?style=for-the-badge&logo=k6)](https://k6.io/)
[![Prometheus](https://img.shields.io/badge/prometheus-000000?style=for-the-badge&logo=prometheus)](https://prometheus.io/)
[![Grafana](https://img.shields.io/badge/grafana-000000?style=for-the-badge&logo=grafana)](https://grafana.com/)
[![Jenkins](https://img.shields.io/badge/jenkins-black?style=for-the-badge&logo=jenkins)](https://www.jenkins.io/)
[![Docker](https://img.shields.io/badge/docker-black?style=for-the-badge&logo=docker)](https://www.docker.com/)
[![Git](https://img.shields.io/badge/git-000000?style=for-the-badge&logo=git)](https://git-scm.com/)

</div>

Este projeto demonstra uma arquitetura de testes de performance completa, utilizando **K6** para execução, **Prometheus** para coleta de métricas e **Grafana** para visualização, tudo orquestrado por uma pipeline **Jenkins** em um ambiente Docker.

### ✨ Contribuidores

<br>
<table border="0">
  <tr>
    <td align="center">
      <a href="https://github.com/Batissta">
        <img src="https://avatars.githubusercontent.com/u/140225853?v=4" width="100px;" alt="Foto do Usuário 1 no GitHub"/><br>
        <sub>
          <b>Francinaldo Batista</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/marcoscastroj">
        <img src="https://avatars.githubusercontent.com/u/102087019?v=4" width="100px;" alt="Foto do Usuário 2 no GitHub"/><br>
        <sub>
          <b>Marcos Castro</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/nathreginavt">
        <img src="https://avatars.githubusercontent.com/u/110910030?v=4" width="100px;" alt="Foto do Usuário 3 no GitHub"/><br>
        <sub>
          <b>Nathália Teixeira</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/viitoriamoreirac">
        <img src="https://avatars.githubusercontent.com/u/95057393?v=4" width="100px;" alt="Foto do Usuário 3 no GitHub"/><br>
        <sub>
          <b>Vitória Cabral</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

### 🕵🏽 Sumário

- [🔧 Binários xK6 Utilizados](#-binários-xk6-utilizados)
- [📦 Início Rápido com Docker](#-início-rápido-com-docker)
- [⚙️ Configurando o Jenkins](#️-configurando-o-jenkins)
- [🚦 Preparando o Ambiente de Teste](#-preparando-o-ambiente-de-teste)
- [📊 Configurando o Dashboard no Grafana](#-configurando-o-dashboard-no-grafana)
- [🚀 Executando e Verificando](#-executando-e-verificando)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚡ Maneiras de executar os testes](#-maneiras-de-executar-os-testes)

### 🔧 Binários xK6 Utilizados

Para estender as funcionalidades do K6, o projeto utiliza os seguintes binários customizados:

- [**xK6 Faker**](https://github.com/grafana/xk6-faker): Para gerar dados de teste dinamicamente.
- [**xK6 Prometheus**](https://github.com/grafana/xk6-output-prometheus-remote): Para enviar métricas de performance para o Prometheus.

---

### 📦 Início Rápido com Docker

Siga estes passos para configurar e executar o ambiente de testes.

1.  **Construa a imagem customizada do Jenkins e inicie a stack de monitoramento (Prometheus + Grafana):**
    ```bash
    docker compose up -d
    ```

---

### ⚙️ Configurando o Jenkins

Acesse a interface do Jenkins em `http://localhost:8080`.

1.  **Login Inicial**: Siga as instruções para realizar o primeiro login. A senha de administrador inicial pode ser encontrada nos logs do seu contêiner Jenkins.
2.  **Criar a Pipeline**: No Jenkins, crie um novo item do tipo **Pipeline**.
    - **Nome**: `k6-smoke`
    - **URL do Repositório**: `https://github.com/Batissta/k6-performance-testing.git`
    - **Caminho do Jenkinsfile**: `ci/smoke/Jenkinsfile`

---

### 🚦 Preparando o Ambiente de Teste

Para que os testes se conectem à sua aplicação (sem alterar nada no código), é necessário que sua API esteja em execução no endereço `http://localhost:3333`.

- A pipeline do Jenkins foi configurada para passar a variável de ambiente `--env BASE_URI=http://host.docker.internal:3333`, direcionando o tráfego do contêiner de testes para a sua máquina local.
- Se sua API não estiver em execução localmente, altere a `BASE_URI` no arquivo de configuração do seu projeto para o endereço correto.

---

### 📊 Configurando o Dashboard no Grafana

Acesse o Grafana em `http://localhost:3000` para visualizar as métricas.

1.  **Adicione a Fonte de Dados Prometheus**:

    - Clique em **"Connections"** e depois em **"Add new data source"**.
    - Procure e selecione **`Prometheus`**.
    - No campo **nome**, coloque **`Prometheus`**.
    - No campo **URL**, adicione: `http://prometheus:9090`
    - Salve e teste a conexão.

2.  **Importe um Dashboard**:

    - Busque por templates no [site oficial do Grafana](https://grafana.com/grafana/dashboards/) (preferencialmente modelos para Prometheus + K6).
    - Copie o ID do dashboard escolhido.
    - No menu lateral do Grafana, navegue para **"Dashboards"** e clique em **"Import"**.

    _Como alternativa, deixei um dashboard configurado para copiar e colar no caminho:_ `util/grafana-dashboard.json`.

    <img src="assets/asset02.png" alt="Demonstração de onde deves procurar o dashboard" width="50%">

    Nessa nova página, clique para criar um novo dashboard e clique em importar um dashboard.<br>

    _Você deve se encontrar nesta página_<br>
    <img src="assets/asset03.png" alt="Página correta" width="50%"><br>

    O id do seu dashboard, deve ser colocado nesse campo<br>
    <img src="assets/asset04.png" alt="Campo correto" width="50%"><br>
    Agora, clique em **Load**, selecione o **data source** que você criou anteriormente e **importe o dashboard**.

---

### 🚀 Executando e Verificando

1.  **Execute a Pipeline**: No Jenkins, vá para a pipeline `k6-smoke` e clique em **"Build Now"**.<br>
    <img src="assets/asset01.png" alt="Demonstração de onde se encontra o botão de buildar a pipeline." width="50%">

2.  **Verifique os Dados**: Após a execução, os dados começarão a aparecer no seu dashboard do Grafana em `http://localhost:3000`.

---

### 📁 Estrutura do Projeto

```
└── batissta-k6-performance-testing/
    ├── readme.md
    ├── docker-compose.yml
    ├── Dockerfile
    ├── prometheus.yml
    ├── ci/
    │   ├── endurance/
    │   │   └── Jenkinsfile
    │   ├── load/
    │   │   └── Jenkinsfile
    │   ├── smoke/
    │   │   └── Jenkinsfile
    │   └── stress/
    │       └── Jenkinsfile
    ├── config/
    │   ├── login/
    │   │   └── .gitkeep
    │   └── signUp/
    │       ├── signUp.js
    │       └── signUpGrafana.js
    ├── data/
    │   ├── dynamic/
    │   │   └── signUpDatapool.js
    │   └── static/
    │       └── .gitkeep
    ├── simulation/
    │   └── signUp.js
    ├── support/
    │   ├── base/
    │   │   ├── checks.js
    │   │   ├── constants.js
    │   │   ├── environment.js
    │   │   ├── imports.js
    │   │   └── metrics.js
    │   ├── libs/
    │   │   └── .gitkeep
    │   └── services/
    │       ├── baseRest.js
    │       └── requests/
    │           ├── loginRequest.js
    │           └── signUpRequest.js
    └── tests/
        ├── enduranceTests.js
        ├── loadTests.js
        ├── smokeTests.js
        └── stressTests.js
```

### ⚡ Maneiras de executar os testes

1. Maneira básica, utilizada para debug na automação dos testes.
   Com um terminal aberto na raiz do repositório (a api para testes deve estar configurada), execute:

```bash
k6 run tests/smokeTests.js
```

2. Segunda forma de execução para um debug mais detalhado e com uma maior visibilidade. Com um terminal aberto na raiz do repositório (a api para testes deve estar configurada), execute:

```bash
K6_CLOUD_TOKEN=<SEU_TOKEN_GRAFANA> k6 cloud run --local-execution tests/smokeTests.js
```

3. A última forma prevista nessa documentação, serve para executar os testes de maneira mais profissional, com integração `CI/CD` com Jenkins e monitoramento, através de containers, com `Prometheus e Grafana`.

Essa maneira foi documentada acima no [📦 Início Rápido com Docker.](#-início-rápido-com-docker)

<br>
<br>
<br>
<br>
<br>
<br>
<br>

_Documentação criada por [Francinaldo Batista.](https://github.com/Batissta)_
