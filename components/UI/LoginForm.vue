<template>
        <v-form id="form-register" ref="form">
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

            <v-btn
                @click="validate"
                :loading="loading"
                class="mb-1 gradient primary"
                size="large"
                color="roxinha"
                variant="tonal"
                block
            >
            Login
            </v-btn>

            <div class="mt-3 mb-2 text-center">
                <NuxtLink to="/register" class="font-semibold text-roxinha"
                    >Registre-se aqui</NuxtLink>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </div>
        </v-form>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '~/store/auth';

    const { authenticateUser } = useAuthStore();
    const { authenticated } = storeToRefs(useAuthStore());

    const router = useRouter()
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const visible = ref(false);
    const form=ref(null)

    const user = ref({
    username: 'kminchelle', 
    password: '0lelplR',
    });

    const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

    const onSubmit = async () => {
        loading.value = true;
        await authenticateUser(user.value);
        console.log(authenticated.value);
        setTimeout(() => {
            loading.value = false;
            router.push('/dashboard');
        }, 3000);
    };
    async function validate() {
    const { valid } = await form.value.validate();
    if(valid) onSubmit();
    }
</script>

<style scoped>
.v-input--is-focused .v-input__slot {
  border: 2px solid #005fcc !important;
  border-bottom-color: rgba(0, 0, 0, 0.38) !important;
}
</style>