<template>
    <v-form id="form-register" ref="register">
        <div class="text-subtitle-1 text-medium-emphasis">Nome:</div>
        <v-text-field
            v-model="name"
            :disabled="loading"
            placeholder="Digite o seu nome"
            :rules="[ruleRequired]"
            color="roxinha"
            prepend-inner-icon="mdi-account-outline"
            variant="outlined"
            class="mb-2"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis">E-mail:</div>
        <v-text-field
            v-model="email"
            :disabled="loading"
            placeholder="Digite o seu E-mail"
            :rules="[ruleRequired, ruleEmail]"
            color="roxinha"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            class="mb-2"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis">Senha:</div>
        <v-text-field
            v-model="password"
            :disabled="loading"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            @click:append-inner="visible = !visible"
            placeholder="Digite a senha"
            :rules="[ruleRequired, rulePassLen]"
            color="roxinha"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            class="mb-2"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis">Confirma a senha:</div>
        <v-text-field
            v-model="confirmpassword"
            :disabled="loading"
            :append-inner-icon="visible_2 ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible_2 ? 'text' : 'password'"
            @click:append-inner="visible_2 = !visible_2"
            placeholder="Digite a confirmação de senha"
            :rules="[ruleRequired, rulePassLen]"
            color="roxinha"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            class="mb-2"
        ></v-text-field>

        <v-btn
            @click="validate"
            :loading="loading"
            class="mb-1 gradient primary"
            size="large"
            color="roxinha"
            variant="tonal"
            block
        >
        Registro
        </v-btn>

        <div class="mt-3 mb-2 text-center">
                <NuxtLink to="/" class="font-weight-bold text-roxinha"
                    >Login</NuxtLink>
                <v-icon icon="mdi-chevron-right"></v-icon>
        </div>

    </v-form>
</template>

<script setup>
const name = ref("");
const email = ref("");
const password = ref("");
const confirmpassword = ref("");
const loading = ref(false);
const visible = ref(false);
const visible_2 = ref(false);
const register=ref(null);

const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

const onSubmit = async () => {
    console.log("Teste");
};
async function validate() {
const { valid } = await register.value.validate();
if(valid) onSubmit();
}
</script>

<style scoped>
.v-input--is-focused .v-input__slot {
border: 2px solid #005fcc !important;
border-bottom-color: rgba(0, 0, 0, 0.38) !important;
}
</style>