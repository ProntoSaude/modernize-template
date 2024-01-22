<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <v-row>
        <div class="auth-header pt-lg-6 pt-2 px-sm-6 px-3 pb-lg-6 pb-0">
                    <div class="position-relative">
                      <img src="https://i.imgur.com/E79eCMs.png" alt="Logo">
                    </div>
                </div>
         
      </v-row>
      <v-divider></v-divider>
      
      <v-card elevation="10">
        <v-row>
          <v-col cols="12" lg="12">
            <v-card-text>
              <div class="d-sm-flex align-center justify-space-between">
                <v-card-title class="text-h5">Cadastro de Corretores</v-card-title>
              </div>
            </v-card-text>
            <v-card-item>
              <v-label class="mb-2 font-weight-medium">Tipo de cadastro</v-label>
              <v-radio-group v-model="tipoCadastro" inline>
                <v-radio label="Pessoa Jurídica" value="pj" color="primary"></v-radio>
                <v-radio label="Pessoa Física" value="pf" color="primary"></v-radio>
              </v-radio-group>
            </v-card-item>
            <v-card-text>
              <div v-if="tipoCadastro === 'pf'">
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-label class="mb-2 font-weight-medium">Nome</v-label>
                    <v-text-field variant="outlined" color="primary" v-model="cadastroPf.nome"
                      :rules="[rules.required]"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field label="CPF" v-model="cadastroPf.cpf" v-mask="'###.###.###-##'"
                      :rules="[rules.required, rules.cpf]"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" sm="3">
                    <v-text-field label="Data de Nascimento" v-model="cadastroPf.dataNascimento" v-mask="'##/##/####'"
                      :rules="[rules.required, rules.dataNascimento]"></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field label="Telefone" v-model="cadastroPf.telefone"
                      v-mask="['(##) #####-####', '(##) ####-####']"
                      :rules="[rules.required, rules.telefone]"></v-text-field>
                  </v-col>
                  <v-text-field label="Email" @input="processInput" v-model="cadastroPf.email"
                    :rules="[rules.required, rules.email]"></v-text-field>
                  <v-text-field label="Endereço" v-model="cadastroPf.endereco" :rules="[rules.required]"></v-text-field>
                </v-row>
                <v-text-field label="CEP" v-model="cadastroPf.cep" v-mask="'#####-###'"
                  :rules="[rules.required]"></v-text-field>
                <v-text-field label="CNPJ da Corretora" v-model="cadastroPf.cnpjCorretora" v-mask="'##.###.###/####-##'"
                  :rules="[rules.required]"></v-text-field>
                <v-col cols="12" sm="6">
                  <v-file-input accept="image/*" label="Documento com foto" hide-details chips
                    variant="outlined"></v-file-input>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-file-input accept="image/*" label="Documento com foto" hide-details chips
                    variant="outlined"></v-file-input>
                </v-col>

                <!-- Campos de upload para documentos -->
                <!-- Endereço, Dados bancários, CNPJ da corretora -->
              </div>
              <div v-if="tipoCadastro === 'pj'">
                <!-- Campos para Pessoa Jurídica -->
                <!-- Adicione campos aqui -->
              </div>
            </v-card-text>
            <v-card-item>
              <v-btn :disabled="!valid" block color="primary" size="large" @click="submit">Enviar</v-btn>
            </v-card-item>
          </v-col>
        </v-row>


      </v-card>



    </v-form>
  </v-container>
  <UiParentCardLogo title="Ordinary Form">
  </UiParentCardLogo>
</template>
  
<script>

import UiParentCardLogo from '@/components/shared/UiParentCardLogo.vue';
import FileAccept from '@/components/forms/form-elements/fileinput/FileInputAccept.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
export default {
  data() {
    return {
      valid: false,
      tipoCadastro: 'pf', // 'pf' para pessoa física, 'pj' para pessoa jurídica
      cadastroPf: {
        nome: '',
        rg: '',
        cpf: '',
        dataNascimento: '',
        telefone: '',
        email: '',
        endereco: '',
        cep: '',
        cnpjCorretora: ''
        // ...outros campos...
      },
      // cadastroPj: {...},
      rules: {
        required: value => !!value || 'Este campo é obrigatório.',
        cpf: value => {
          // Regra de validação para CPF (simplificada)
        },
        telefone: value => {
          // Regra de validação para telefone
        },
        email: value => {
          // Regra de validação para e-mail
          const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,10}$/;
          return pattern.test(value) || 'E-mail inválido';
        },
        // ...outras regras...
      }
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Processar o formulário
      }
      this.reset()
    },
    reset() {
      this.$refs.form.reset();
    },
    processInput(event) {
      // Remove letras maiúsculas e atribui o valor processado ao modelo de dados
      this.cadastroPf.email = event.target.value.replace(/[A-Z]/g, char => char.toLowerCase());
    }
  }
};
</script>
  