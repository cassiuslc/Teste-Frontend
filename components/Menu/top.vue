<template>
    <div>
      <v-toolbar class="bg-white rounded-lg shadow-md">
        <v-app-bar-nav-icon @click="drawer = !drawer" class="text-gray-800"></v-app-bar-nav-icon>
  
        <v-spacer></v-spacer>

        <div class="flex hidden bg-white shadow-md md:block">
          <v-row no-gutters align="center" justify="center">
          <v-btn to="/dashboard" uppercase="false" text>
          <v-list-item-title class="text-gray-800">Home</v-list-item-title>
          </v-btn>
          <v-btn to="/profile" uppercase="false" text>
            <v-list-item-title class="text-gray-800">Meu Perfil</v-list-item-title>
          </v-btn>
          <v-btn to="/config" uppercase="false" text>
            <v-list-item-title class="text-gray-800">Configurações</v-list-item-title>
          </v-btn>
          </v-row>
        </div>
        


        <template #append>
          <v-btn icon class="mr-2">
            <v-badge dot color="warning">
              <v-icon icon="mdi-bell-outline"></v-icon>
            </v-badge>
          </v-btn>
          <v-btn icon class="mr-2">
          <v-menu>
            <template #activator="{ props }">
              <v-avatar v-bind="props">
                <v-img cover src="/user.jpeg"></v-img>
              </v-avatar>
              </template>
              <v-card min-width="200px">
                <v-list :lines="false" density="compact">
                  <v-list-item to="/profile" prepend-icon="mdi-account-outline">
                    <v-list-item-title>Meu Perfil</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="logout" prepend-icon="mdi-logout-variant">
                    <v-list-item-title>Sair</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
          </v-menu>
        </v-btn>
        </template>

      </v-toolbar>
    </div>

    <v-navigation-drawer v-model="drawer" color="#1F2937" app>
        <v-list-item class="px-2 py-5">
            <v-list-item-title class="text-capitalize" align="center">
                Cassius Lc
            </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        
        <v-list>
          <v-list-item to="/dashboard" prepend-icon="mdi-home" title="Home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" to="/profile" title="Conta"></v-list-item>
          <v-list-group value="users">
            <template #activator="{ props }">
              <v-list-item
                  v-bind="props"
                  prepend-icon="mdi-account-group"
                  title="Usuários"
                ></v-list-item>
              </template>
              <v-list-item to="/config" title="Config"></v-list-item>
              <v-list-item title="Fatura"></v-list-item>
          </v-list-group>
        </v-list>

        <template v-slot:append>
                <div class="pa-2">
                    <v-card align="center" class="pa-3">
                        <h4 class="grey--text">USUARIO X</h4>
                        <h2>teste@example.com</h2>
                  
                                <v-btn
                                      class="mt-3 mb-3 gradient primary"
                                      color="roxinha"
                                      @click="logout"
                                      variant="tonal"
                                      block
                                  >
                                  Sair
                                  </v-btn>
                    </v-card>
                </div>
        </template>
    </v-navigation-drawer>

  </template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

const router = useRouter();
const drawer = ref(null);

const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const logout = () => {
  logUserOut();
  router.push('/');
};
</script>
  
  