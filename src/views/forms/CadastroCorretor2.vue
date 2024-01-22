<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import OrdinaryForm from "@/components/forms/form-layouts/OrdinaryForm.vue";
import InputVarients from "@/components/forms/form-layouts/InputVarients.vue";
import DefaultForm from "@/components/forms/form-layouts/DefaultForm.vue";
import CadstroRepresentanteForm from "@/components/forms/form-layouts/CadstroRepresentanteForm.vue";
import DisabledForm from "@/components/forms/form-layouts/DisabledForm.vue";
import FormLeftIcon from "@/components/forms/form-layouts/FormLeftIcon.vue";
import FormRightIcon from "@/components/forms/form-layouts/FormRightIcon.vue";
// theme breadcrumb
const page = ref({ title: 'Representantes de vendas' });
const breadcrumbs = ref([
  {
    text: 'Pronto Fácil',
    disabled: true,
    href: '#'
  }
]);

</script>
<template>
  <v-container fluid class="page-wrapper pb-sm-15 pb-10">
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12">
        <CadstroRepresentanteForm />
      </v-col>
    </v-row>
  </v-container>
</template>