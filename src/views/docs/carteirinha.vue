<template>
    <div v-if="exibirFormulario" class="card-container" id="login">
        <div class="tuple-center">
            <img src="https://i.imgur.com/ufUaJO5.png" alt="Logo" class="logo-big" style="margin-bottom: 20px;">
            <v-text-field variant="outlined" placeholder="Informe seu CPF" class="texto-centralizado" v-model="cpfFormulario"
                v-mask="'###.###.###-##'"></v-text-field>
            <button class="botao-estilizado-acesso" @click="acessarCarteirinha()">Acessar Carteirinha</button>
        </div>
    </div>
    <div v-if="!exibirFormulario" class="card-container" id="ui-container">
        <div class="card-container" id="card-container">
            <!-- Primeiro Card -->
            <div class="card1">
                <div class="logo-container">
                    <img src="https://i.imgur.com/ufUaJO5.png" alt="Logo" class="logo">
                    <p class="website">www.prontosaude.digital</p>
                </div>
            </div>
            <!-- Segundo Card -->
            <div class="card2">
                <div v-if="loading" class="logo-container">
                    <v-text-field color="#FFFFFF" style="width: 350px;" loading hide-details
                        variant="underlined"></v-text-field>
                </div>
                <div v-if="!loading" class="inner-container">
                    <div class="logo-qr-container">
                        <img src="https://i.imgur.com/ufUaJO5.png" alt="Logo" class="logo-small">
                    </div>
                    <div class="info">
                        <div class="tuple-left">
                            <p class="value">{{ nome }}</p>
                            <p class="label">Beneficiário(a)</p>
                        </div>
                    </div>
                    <div class="details">
                        <div class="tuple-left">
                            <p class="value">Pronto Completo</p>
                            <p class="label">Plano</p>
                        </div>
                        <div class="tuple-center">
                            <p class="value">{{ numeroCarteirinha }}</p>
                            <p class="label">N° Carteira</p>
                        </div>
                        <div class="tuple-right">
                            <p class="value">{{ dataNascimento }}</p>
                            <p class="label">Nascimento</p>
                        </div>
                    </div>
                    <div class="validity">
                        <div class="tuple-left">
                            <p class="value">{{ contratante }}</p>
                            <p class="label">Contratante</p>
                        </div>
                        <div class="tuple-right">
                            <p class="value">01/12/2023</p>
                            <p class="label">Vigência</p>
                        </div>
                    </div>
                </div>
    
                <div class="contact-info">
                    <p>(61) 9 9194-2428</p>
                    <p>(61) 3142-0433</p>
                </div>
            </div>
        </div>
        <button class="botao-estilizado" @click="exportToPDF()">Baixar em PDF</button>
    </div>
</template>
  
<script setup lang="ts">
import ChatProfile from '@/components/apps/chats/ChatProfile.vue';
import html2pdf from 'html2pdf.js'
import { replace } from 'lodash';
import { ref } from 'vue';

const nome = ref('');
const plano = ref('');
const dataNascimento = ref('');
const contratante = ref('');
const vigencia = ref('');
const numeroCarteirinha = ref('');
const loading = ref(true)
const exibirFormulario = ref(true)
const cpf = ref('')
const cpfFormulario = ref('')

const acessarCarteirinha = () => {
    cpf.value = cpfFormulario.value.replace(/[-.]/g,'')
    if(cpf.value.length == 11){
        exibirFormulario.value = false
        consultaBeneficiario();
    }
};

const determinaTitular = (parent_id: string) => {
    loading.value = true
    const url = 'https://apifacil.prontosaude.digital/dav/id/' + parent_id
    fetch(url)
        .then(response => response.json())
        .then(data => {
            contratante.value = data.name
            loading.value = false
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            loading.value = false
        });
}

const consultaBeneficiario = () => {
    loading.value = true
    const url = 'https://apifacil.prontosaude.digital/dav/cpf/' + cpf.value
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.plan_status == "ACTIVE") {
                nome.value = data.name.toUpperCase()
                dataNascimento.value = transformarDataFormato(data.birth_date)
                if (data.parent_id) {
                    console.log('buscando dados do titular')
                    determinaTitular(data.parent_id)
                } else {
                    contratante.value = nome.value
                    loading.value = false
                }
                vigencia.value = data.logradouro
                numeroCarteirinha.value = transformarCpfEmCarteirinha(cpf.value)
            }


        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            loading.value = false
        });

}

const transformarCpfEmCarteirinha = (cpf: string) => {

    // Constante para a transformação
    const constante = 3;

    // Aplicar a transformação
    let carteirinha = '';
    for (let i = 0; i < cpf.length; i++) {
        let novoDigito = (parseInt(cpf[i], 10) + constante) % 10;
        carteirinha += novoDigito.toString();
    }

    return carteirinha;
}

const transformarDataFormato = (data: string) => {
    // Separa os componentes da data (ano, mês, dia)
    const partes = data.split('-');

    // Checa se a data é válida (composta por três partes)
    if (partes.length !== 3) {
        return "Data inválida";
    }

    // Reorganiza os componentes no formato DD/MM/YYYY
    return partes[2] + '/' + partes[1] + '/' + partes[0];
}

const exportToPDF = () => {
    var element = document.getElementById('card-container');

    var width = 159;
    var height = 125;

    html2pdf().from(element).set({
        useCORS: true,
        margin: [0, 0, 0, 0], // Sem margens
        filename: 'Carteirinha Digital.pdf',
        image: { type: 'png', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: [width, height] }
    }).save();
}
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

html,
body {
    font-family: 'Montserrat', sans-serif;
    /*background-color: #f0f0f0;#222525*/
    color: white;
    display: flex;
    flex-direction: column;
    /* Organiza os itens verticalmente */
    justify-content: center;
    /* Centraliza horizontalmente */
    align-items: center;
    /* Centraliza verticalmente */
    height: 100%;
}
.texto-centralizado input {
  text-align: center;
  width: 250px;
}
.card-container {
    display: flex;
    flex-direction: column;
    /* Organiza os itens verticalmente */
    justify-content: center;
    align-items: center;
    /* Centraliza os itens horizontalmente */
    height: 100%;
    padding: 10px;
}

.card1 {
    background-color: rgb(40, 40, 40);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 10px;
    min-width: 450px;
    min-height: 280px;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3);
}

.card2 {
    background-color: rgb(40, 40, 40);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    width: 450px;
    height: 280px;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3);
}

.inner-container {
    padding: 25px;
}

.logo-container {

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* Isso irá garantir que o container tenha altura total do card */
    flex-direction: column;
    /* Isso irá organizar os itens em uma coluna vertical */

}

.logo-qr-container {
    text-align: left;
}

.logo {
    max-width: 100%;
    /* Ajuste o tamanho da logo conforme necessário */
    height: 50px;
}
.logo-big {
    max-width: 100%;
    /* Ajuste o tamanho da logo conforme necessário */
    height: 55px;
}

.logo-small {
    max-width: 140px;
    /* Ajuste o tamanho da logo pequena conforme necessário */
    height: auto;
}

.qr-code {
    max-width: 80px;
    /* Ajuste o tamanho do QR Code conforme necessário */
    height: auto;
}

.info,
.details,
.validity {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.label {
    margin: 0px 0;
    color: #00ade0;
    font-weight: 500;
    font-size: 14px;
}

.value {
    margin: 2px 0;
    color: white;
    font-weight: 600;
    font-size: 14px;
}

.tuple-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.tuple-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.tuple-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
}

.contact-info {
    background-color: #00ade0;
    /* Azul, mas você pode ajustar a cor conforme necessário */
    color: white;
    /* Texto branco para contraste */
    padding: 10px;
    /* Espaçamento interno */
    height: 32px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    /* Isso irá organizar os itens em uma coluna vertical */
    border-radius: 0 0 10px 10px;
    /* Arredondar apenas os cantos inferiores */

    font-weight: 600;
    font-size: 14px;
}

.footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
}

.footer-column {
    flex: 1;
}

.footer-column.large {
    flex: 4;
}

.website {
    margin: 0px 0;
    color: white;
}

/* Estilos do botão */
.botao-estilizado {

    background-color: #00ade0;
    /* Cor de fundo */
    color: white;
    /* Cor do texto */
    border: none;
    /* Sem borda */
    padding: 20px;
    /* Espaçamento interno */
    width: 450px;
    margin: 20px;
    border-radius: 10px;
    /* Cantos arredondados */
    font-family: 'Montserrat', sans-serif;
    /* Fonte Montserrat */
    font-size: 16px;
    /* Tamanho da fonte */
    cursor: pointer;
    /* Cursor de mão quando passar o mouse */
    transition: background-color 0.3s, transform 0.3s;
    /* Transição suave da cor de fundo e transformação */
    font-weight: 600;
}

.botao-estilizado:hover {
    background-color: #0280aa;
    /* Cor de fundo ao passar o mouse */
}

.botao-estilizado:active {
    transform: scale(0.9);
    /* Efeito de "apertar" ao clicar */
}

.botao-estilizado-acesso {

background-color: #00ade0;
/* Cor de fundo */
color: white;
/* Cor do texto */
border: none;
/* Sem borda */
padding: 10px;
/* Espaçamento interno */
width: 250px;
margin: 20px;
border-radius: 10px;
/* Cantos arredondados */
font-family: 'Montserrat', sans-serif;
/* Fonte Montserrat */
font-size: 16px;
/* Tamanho da fonte */
cursor: pointer;
/* Cursor de mão quando passar o mouse */
transition: background-color 0.3s, transform 0.3s;
/* Transição suave da cor de fundo e transformação */
font-weight: 600;
}

.botao-estilizado-acesso:hover {
background-color: #0280aa;
/* Cor de fundo ao passar o mouse */
}

.botao-estilizado-acesso:active {
transform: scale(0.9);
/* Efeito de "apertar" ao clicar */
}
</style>
  