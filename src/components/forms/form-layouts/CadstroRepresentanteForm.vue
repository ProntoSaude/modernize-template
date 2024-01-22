<script setup lang="ts">

import { ref } from 'vue';

// variáveis de dados pj
const razaoSocial = ref('');
const nomeFantasia = ref('');
const CNPJ = ref('');
const telefoneFixoEmpresa = ref('');
const nomeResponsavel = ref('');
const CPFResponsavel = ref('');
const emailResponsavel = ref('');
const celularResponsavel = ref('');
const enderecoEmpresa = ref('');
const cidadeEmpresa = ref('');
const CEPEmpresa = ref('');
const bairroEmpresa = ref('');
const estadoEmpresa = ref('DF');
const corretoraEmpresa = ref('N/A');
const numeroConta = ref('');
const numeroAgencia = ref('');
const banco = ref('');
const tipoChavePIX = ref('');
const chavePIX = ref('');

// variáveis de dados pf
const nomeCompleto = ref('');
const cpf = ref('');
const sexo = ref(null);
const dataDeNascimento = ref('');
const email = ref('');
const celular = ref('');
const telefoneFixo = ref('');
const endereco = ref('');
const cidade = ref('');
const cep = ref('');
const bairro = ref('');
const estado = ref('DF');
const corretora = ref('');
const codigo = ref('');

// alimentadores
const sexos = ref(['Masculino', 'Feminino', 'Transexual', 'Outros']);
const estados = ref(['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']);
const corretoras = ref(['Mappa B Logistica Em Saude Ltda - 19.969.303/0001-45'])
const corretorasPJ = ref(['N/A', 'Mappa B Logistica Em Saude Ltda - 19.969.303/0001-45'])
const tiposChavePIX = ref(['CPF', 'CNPJ', 'Email', 'Telefone Celular', 'Chave Aleatória'])
const bancos = ref([
    "001 – Banco do Brasil S.A.",
    "033 – Banco Santander (Brasil) S.A.",
    "104 – Caixa Econômica Federal",
    "237 – Banco Bradesco S.A.",
    "341 – Banco Itaú S.A.",
    "356 – Banco Real S.A. (antigo)",
    "389 – Banco Mercantil do Brasil S.A.",
    "399 – HSBC Bank Brasil S.A. – Banco Múltiplo",
    "422 – Banco Safra S.A.",
    "453 – Banco Rural S.A.",
    "633 – Banco Rendimento S.A.",
    "652 – Itaú Unibanco Holding S.A.",
    "745 – Banco Citibank S.A.",
    "246 – Banco ABC Brasil S.A.",
    "025 – Banco Alfa S.A.",
    "641 – Banco Alvorada S.A.",
    "029 – Banco Banerj S.A.",
    "038 – Banco Banestado S.A.",
    "000 – Banco Bankpar S.A.",
    "740 – Banco Barclays S.A.",
    "107 – Banco BBM S.A.",
    "031 – Banco Beg S.A.",
    "096 – Banco BM&F de Serviços de Liquidação e Custódia S.A",
    "318 – Banco BMG S.A.",
    "752 – Banco BNP Paribas Brasil S.A.",
    "248 – Banco Boavista Interatlântico S.A.",
    "036 – Banco Bradesco BBI S.A.",
    "204 – Banco Bradesco Cartões S.A.",
    "225 – Banco Brascan S.A.",
    "044 – Banco BVA S.A.",
    "263 – Banco Cacique S.A.",
    "473 – Banco Caixa Geral – Brasil S.A.",
    "222 – Banco Calyon Brasil S.A.",
    "040 – Banco Cargill S.A.",
    "M08 – Banco Citicard S.A.",
    "M19 – Banco CNH Capital S.A.",
    "215 – Banco Comercial e de Investimento Sudameris S.A.",
    "756 – Banco Cooperativo do Brasil S.A. – BANCOOB",
    "748 – Banco Cooperativo Sicredi S.A.",
    "505 – Banco Credit Suisse (Brasil) S.A.",
    "229 – Banco Cruzeiro do Sul S.A.",
    "003 – Banco da Amazônia S.A.",
    "083-3 – Banco da China Brasil S.A.",
    "707 – Banco Daycoval S.A.",
    "M06 – Banco de Lage Landen Brasil S.A.",
    "024 – Banco de Pernambuco S.A. – BANDEPE",
    "456 – Banco de Tokyo-Mitsubishi UFJ Brasil S.A.",
    "214 – Banco Dibens S.A.",
    "047 – Banco do Estado de Sergipe S.A.",
    "037 – Banco do Estado do Pará S.A.",
    "041 – Banco do Estado do Rio Grande do Sul S.A.",
    "004 – Banco do Nordeste do Brasil S.A.",
    "265 – Banco Fator S.A.",
    "M03 – Banco Fiat S.A.",
    "224 – Banco Fibra S.A.",
    "626 – Banco Ficsa S.A.",
    "394 – Banco Finasa BMC S.A.",
    "M18 – Banco Ford S.A.",
    "233 – Banco GE Capital S.A.",
    "734 – Banco Gerdau S.A.",
    "M07 – Banco GMAC S.A.",
    "612 – Banco Guanabara S.A.",
    "M22 – Banco Honda S.A.",
    "063 – Banco Ibi S.A. Banco Múltiplo",
    "M11 – Banco IBM S.A.",
    "604 – Banco Industrial do Brasil S.A.",
    "320 – Banco Industrial e Comercial S.A.",
    "653 – Banco Indusval S.A.",
    "630 – Banco Intercap S.A.",
    "249 – Banco Investcred Unibanco S.A.",
    "184 – Banco Itaú BBA S.A.",
    "479 – Banco ItaúBank S.A",
    "M09 – Banco Itaucred Financiamentos S.A.",
    "376 – Banco J. P. Morgan S.A.",
    "074 – Banco J. Safra S.A.",
    "217 – Banco John Deere S.A.",
    "065 – Banco Lemon S.A.",
    "600 – Banco Luso Brasileiro S.A.",
    "755 – Banco Merrill Lynch de Investimentos S.A.",
    "746 – Banco Modal S.A.",
    "151 – Banco Nossa Caixa S.A.",
    "045 – Banco Opportunity S.A.",
    "623 – Banco Panamericano S.A.",
    "611 – Banco Paulista S.A.",
    "643 – Banco Pine S.A.",
    "638 – Banco Prosper S.A.",
    "747 – Banco Rabobank International Brasil S.A.",
    "M16 – Banco Rodobens S.A.",
    "072 – Banco Rural Mais S.A.",
    "250 – Banco Schahin S.A.",
    "749 – Banco Simples S.A.",
    "366 – Banco Société Générale Brasil S.A.",
    "637 – Banco Sofisa S.A.",
    "464 – Banco Sumitomo Mitsui Brasileiro S.A.",
    "082-5 – Banco Topázio S.A.",
    "M20 – Banco Toyota do Brasil S.A.",
    "634 – Banco Triângulo S.A.",
    "208 – Banco UBS Pactual S.A.",
    "M14 – Banco Volkswagen S.A.",
    "655 – Banco Votorantim S.A.",
    "610 – Banco VR S.A.",
    "370 – Banco WestLB do Brasil S.A.",
    "021 – BANESTES S.A. Banco do Estado do Espírito Santo",
    "719 – Banif-Banco Internacional do Funchal (Brasil)S.A.",
    "073 – BB Banco Popular do Brasil S.A.",
    "078 – BES Investimento do Brasil S.A.-Banco de Investimento",
    "069 – BPN Brasil Banco Múltiplo S.A.",
    "070 – BRB – Banco de Brasília S.A.",
    "070 – BRB Fla – Banco de Brasília S.A.",
    "477 – Citibank N.A.",
    "081-7 – Concórdia Banco S.A.",
    "487 – Deutsche Bank S.A. – Banco Alemão",
    "751 – Dresdner Bank Brasil S.A. – Banco Múltiplo",
    "062 – Hipercard Banco Múltiplo S.A.",
    "492 – ING Bank N.V.",
    "488 – JPMorgan Chase Bank",
    "409 – UNIBANCO – União de Bancos Brasileiros S.A.",
    "230 – Unicard Banco Múltiplo S.A.",
    "260 - Banco Nubank",
    "336 - C6 Bank",
    "380 - PicPay",
    "197 - Stone Pagamentos",
    "735 - Neon Pagamentos",
    "290 - PagBank",
    "280 - WillBank",
    "077 - Banco Inter",
    "237 - Banco Next",
]);


// variáveis de controle
const tipoCadastro = ref('pj');
const valid = ref(true);

// métodos
const processarEmail = (event: any) => {
    // Remove letras maiúsculas e atribui o valor processado ao modelo de dados
    email.value = event.target.value.replace(/[A-Z]/g, (char: string) => char.toLowerCase());
}
const processarEmailResponsavel = (event: any) => {
    // Remove letras maiúsculas e atribui o valor processado ao modelo de dados
    emailResponsavel.value = event.target.value.replace(/[A-Z]/g, (char: string) => char.toLowerCase());
}
const processarCodigo = (event: any) => {
    // Remove letras maiúsculas e atribui o valor processado ao modelo de dados
    codigo.value = event.target.value.toUpperCase();
}
const processarCEP = (event: any) => {
    const cep = event.target.value.replace(/-/g, '');
    // Verifica se o CEP tem o tamanho correto
    if (cep.length === 8) {
        // URL da API para consulta de CEPs
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        // Realiza a requisição para a API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Trata os dados retornados
                console.log(data);
                estado.value = data.uf
                cidade.value = data.localidade
                bairro.value = data.bairro
                endereco.value = data.logradouro
                // Aqui você pode adicionar o código para lidar com os dados do CEP
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });
    }
};
const processarCEPEmpresa = (event: any) => {
    const cep = event.target.value.replace(/-/g, '');
    // Verifica se o CEP tem o tamanho correto
    if (cep.length === 8) {
        // URL da API para consulta de CEPs
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        // Realiza a requisição para a API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Trata os dados retornados
                console.log(data);
                estadoEmpresa.value = data.uf
                cidadeEmpresa.value = data.localidade
                bairroEmpresa.value = data.bairro
                enderecoEmpresa.value = data.logradouro
                // Aqui você pode adicionar o código para lidar com os dados do CEP
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });
    }
};


</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div>
                <v-card-title class="text-h5">Formulário de cadastro</v-card-title>
            </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text class="pb-0 mx-4">
            <!---Tipo de cadastro--->
            <h6 class="text-h6">Tipo de cadastro</h6>
            <v-row class="mt-5">
                <v-radio-group v-model="tipoCadastro" inline>
                    <v-radio label="Pessoa Jurídica (Corretora)" value="pj" color="primary"></v-radio>
                    <v-radio label="Pessoa Física (Corretor)" value="pf" color="primary"></v-radio>
                </v-radio-group>
            </v-row>
        </v-card-text>

        <v-divider></v-divider>
        <div v-if="tipoCadastro === 'pf'">
            <!---Identificação--->
            <v-card-text class="pb-0 mx-4">
                <h6 class="text-h6">Identificação</h6>
                <v-row class="mt-5">
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">Nome completo</v-label>
                        <v-text-field variant="outlined" color="primary" v-model="nomeCompleto"></v-text-field>
                        <v-label class="mb-2 font-weight-medium">CPF</v-label>
                        <v-text-field variant="outlined" placeholder="000.000.000-00" v-model="cpf"
                            v-mask="'###.###.###-##'"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">Sexo</v-label>
                        <v-select :items="sexos" item-title="sexo" v-model="sexo" item-value="sexo" return-object
                            single-line variant="outlined"></v-select>
                        <v-label class="mb-2 font-weight-medium">Data de nascimento</v-label>
                        <v-text-field color="primary" variant="outlined" type="date"
                            v-model="dataDeNascimento"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>

            <!---Contato--->
            <v-card-text class="pb-0 mx-4">
                <h6 class="text-h6">Dados de contato</h6>
                <v-row class="mt-5">
                    <v-col cols="12">
                        <v-label class="mb-2 font-weight-medium">Email</v-label>
                        <v-text-field variant="outlined" @input="processarEmail" color="primary" hide-details
                            v-model="email"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">Telefone celular</v-label>
                        <v-text-field variant="outlined" color="primary" v-mask="'(##) #####-####'"
                            placeholder="(00) 00000-0000" v-model="celular"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">Telefone fixo</v-label>
                        <v-text-field variant="outlined" color="primary" v-mask="'(##) ####-####'"
                            placeholder="(00) 0000-0000" v-model="telefoneFixo"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">CEP</v-label>
                        <v-text-field variant="outlined" color="primary" v-mask="'#####-###'" placeholder="00000-000"
                            v-model="cep" @input="processarCEP"></v-text-field>
                        <v-label class="mb-2 font-weight-medium">Endereço</v-label>
                        <v-text-field variant="outlined" color="primary" v-model="endereco"></v-text-field>
                        <v-label class="mb-2 font-weight-medium">Estado</v-label>
                        <v-select :items="estados" item-title="estado" item-value="estadoEscolhido" return-object
                            single-line variant="outlined" v-model="estado"></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">Cidade</v-label>
                        <v-text-field variant="outlined" color="primary" v-model="cidade"></v-text-field>
                        <v-label class="mb-2 font-weight-medium">Bairro</v-label>
                        <v-text-field variant="outlined" color="primary" v-model="bairro"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>

            <!---Corretora a qual está vinculado--->
            <v-card-text class="pb-0 mx-4">
                <h6 class="text-h6">Vinculação</h6>
                <v-row class="mt-5">
                    <v-col cols="12">
                        <v-label class="mb-2 font-weight-medium">Corretora a qual pertence</v-label>
                        <v-select :items="corretoras" item-title="corretora" item-value="corretoraEscolhida" return-object
                            single-line variant="outlined" v-model="corretora"></v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="mb-2 font-weight-medium">Código desejado</v-label>
                        <v-text-field variant="outlined" color="primary" @input="processarCodigo" placeholder="DIGAOPREMIOS"
                            v-model="codigo"
                            hint="Este é o código que o comprador digitará para te vincular à compra."></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>

            <!---Documentação--->
            <v-card-text class="pb-0 mx-4">
                <h6 class="text-h6">Documentação</h6>
                <v-row class="mt-5">
                    <v-col cols="12" sm="6">
                        <v-label class="mb-2 mx-10 font-weight-medium">Documento com Foto</v-label>
                        <v-file-input chips accept=".pdf,.png,.jpeg,.jpg" variant="outlined"></v-file-input>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-label class="mb-2 mx-10 font-weight-medium">Comprovante de Residência</v-label>
                        <v-file-input chips accept=".pdf,.png,.jpeg,.jpg" variant="outlined"></v-file-input>
                    </v-col>
                </v-row>
            </v-card-text>
        </div>
        <div v-if="tipoCadastro === 'pj'">
            <!---Identificação--->
            <v-card-text class="pb-0 mx-4">
                <h6 class="text-h6">Identificação</h6>
                <v-row class="mt-5">
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">Razão Social</v-label>
                        <v-text-field variant="outlined" color="primary" v-model="razaoSocial"></v-text-field>
                        <v-label class="mb-2 font-weight-medium">Nome Fantasia</v-label>
                        <v-text-field variant="outlined" color="primary" v-model="nomeFantasia"></v-text-field>

                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">CNPJ</v-label>
                        <v-text-field variant="outlined" placeholder="00.000.000/0000-00" v-model="CNPJ"
                            v-mask="'##.###.###/####-##'"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>

            <!---Dados de Correspondência--->
            <v-card-text class="pb-0 mx-4">
                <h6 class="text-h6">Dados de correspondência</h6>
                <v-row class="mt-5">
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">CEP</v-label>
                        <v-text-field variant="outlined" color="primary" v-mask="'#####-###'" placeholder="00000-000"
                            v-model="CEPEmpresa" @input="processarCEPEmpresa"></v-text-field>
                        <v-label class="mb-2 font-weight-medium">Endereço</v-label>
                        <v-text-field variant="outlined" color="primary" v-model="enderecoEmpresa"></v-text-field>
                        <v-label class="mb-2 font-weight-medium">Estado</v-label>
                        <v-select :items="estados" item-title="estado" item-value="estadoEscolhido" return-object
                            single-line variant="outlined" v-model="estadoEmpresa"></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">Cidade</v-label>
                        <v-text-field variant="outlined" color="primary" v-model="cidadeEmpresa"></v-text-field>
                        <v-label class="mb-2 font-weight-medium">Bairro</v-label>
                        <v-text-field variant="outlined" color="primary" v-model="bairroEmpresa"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>

            <!---Contato--->
            <v-card-text class="pb-0 mx-4">
                <h6 class="text-h6">Dados do responsável</h6>
                <v-row class="mt-5">
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">Nome completo</v-label>
                        <v-text-field variant="outlined" color="primary" v-model="nomeResponsavel"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">CPF</v-label>
                        <v-text-field variant="outlined" placeholder="000.000.000-00" v-model="CPFResponsavel"
                            v-mask="'###.###.###-##'"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="mb-2 font-weight-medium">Email</v-label>
                        <v-text-field variant="outlined" @input="processarEmailResponsavel" color="primary" hide-details
                            v-model="emailResponsavel"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">Telefone celular</v-label>
                        <v-text-field variant="outlined" color="primary" v-mask="'(##) #####-####'"
                            placeholder="(00) 00000-0000" v-model="celularResponsavel"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">Telefone fixo</v-label>
                        <v-text-field variant="outlined" color="primary" v-mask="'(##) ####-####'"
                            placeholder="(00) 0000-0000" v-model="telefoneFixoEmpresa"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>

            <!---Dados Bancários--->
            <v-card-text class="pb-0 mx-4">
                <h6 class="text-h6">Dados bancários</h6>
                <v-row class="mt-5">
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">Agência</v-label>
                        <v-text-field variant="outlined" color="primary" v-model="numeroAgencia"></v-text-field>
                        <v-label class="mb-2 font-weight-medium">Conta</v-label>
                        <v-text-field variant="outlined" color="primary" v-model="numeroConta"></v-text-field>
                        <v-label class="mb-2 font-weight-medium">Banco</v-label>
                        <v-combobox single-line :items="bancos" return-object variant="outlined"
                            v-model="banco"></v-combobox>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="mb-2 font-weight-medium">Tipo de chave PIX</v-label>
                        <v-select :items="tiposChavePIX" return-object single-line variant="outlined"
                            v-model="tipoChavePIX"></v-select>
                        <v-label class="mb-2 font-weight-medium">Chave PIX</v-label>
                        <v-text-field variant="outlined" color="primary" v-model="chavePIX"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>

            <!---Vinculação--->
            <v-card-text class="pb-0 mx-4">
                <h6 class="text-h6">Vinculação</h6>
                <v-row class="mt-5">
                    <v-col cols="12">
                        <v-label class="mb-2 font-weight-medium">Corretora a qual pertence (opcional)</v-label>
                        <v-select :items="corretorasPJ" item-title="corretora" item-value="corretoraEscolhida" return-object
                            single-line variant="outlined" v-model="corretoraEmpresa"></v-select>
                    </v-col>
                </v-row>
            </v-card-text>

            <!---Documentação--->
            <v-card-text class="pb-0 mx-4">
                <h6 class="text-h6">Documentação</h6>
                <v-row class="mt-5">
                    <v-col cols="12" sm="6">
                        <v-label class="mb-2 mx-10 font-weight-medium">Última alteração contratutal</v-label>
                        <v-file-input chips accept=".pdf,.png,.jpeg,.jpg" variant="outlined"></v-file-input>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-label class="mb-2 mx-10 font-weight-medium">Comprovante de endereço</v-label>
                        <v-file-input chips accept=".pdf,.png,.jpeg,.jpg" variant="outlined"></v-file-input>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-label class="mb-2 mx-10 font-weight-medium">Documento com foto do responsável</v-label>
                        <v-file-input chips accept=".pdf,.png,.jpeg,.jpg" variant="outlined"></v-file-input>
                    </v-col>
                </v-row>
            </v-card-text>
        </div>
        <!---Botão de envio--->
        <v-card-item>
            <v-btn v-if="tipoCadastro === 'pj'" :disabled="!valid" color="primary" block size="large">Cadastrar Pessoa Jurídica</v-btn>
            <v-btn v-if="tipoCadastro === 'pf'" :disabled="!valid" color="primary" block size="large">Cadastrar Pessoa Física</v-btn>
        </v-card-item>

    </v-card>
</template>
