<script setup lang="ts">
import { ChevronRightIcon } from 'vue-tabler-icons';
const props = defineProps({
    title: String,
    breadcrumbs: Array as any,
    icon: String
});
</script>

<template>
    <v-card class="bg-lightprimary elevation-0 rounded-md mb-8">
        <div class="px-8">
            <div class="d-flex justify-space-between">
                <div class="d-flex py-8 align-center">
                    <div>
                        <h3 class="text-h3 mb-2">{{ title }}</h3>
                        <v-breadcrumbs :items="breadcrumbs" class="text-h6 font-weight-medium pa-0 ml-n1">
                            <template v-slot:divider>
                                <div class="d-flex align-center text-h3 mt-n4">.</div>
                            </template>
                            <template v-slot:title="{ item }">
                                <h6 class="text-medium-emphasis text-subtitle-1">{{ item.title }}</h6>
                            </template>
                        </v-breadcrumbs>
                    </div>
                </div>
                <div class="d-flex py-8 align-center">
                    <div>
                        <img src="@/assets/images/breadcrumb/icone.png" alt="breadcrumb" style="height:60px;" />
                    </div>
                </div>
            </div>
        </div>
    </v-card>
</template>

<style lang="scss">
.page-breadcrumb {
    .v-toolbar {
        background: transparent;
    }
}
</style>
