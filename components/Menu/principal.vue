<template>
    <v-col>
                <div class="rounded-lg">
                    <div class="flex flex-wrap card">
                        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
                        <UIItemMenu
                        corIcone="primary"
                        icone="mdi-view-dashboard"
                        rota="/dashboard"
                        nomePrincipal="Dashboard"
                        corAcesso="primary"
                        dadosAcesso="Acessar"
                        ></UIItemMenu>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 p-2">
                        <UIItemMenu
                        corIcone="success"
                        icone="mdi-chart-bar"
                        rota="/analytics"
                        nomePrincipal="Analytics"
                        corAcesso="success"
                        dadosAcesso="Acessar"
                        ></UIItemMenu>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 p-2">
                        <UIItemMenu
                        corIcone="warning"
                        icone="mdi-calendar"
                        rota="/calendar"
                        nomePrincipal="Calendário"
                        corAcesso="warning"
                        dadosAcesso="Acessar"
                        ></UIItemMenu>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 p-2">
                        <UIItemMenu
                        corIcone="info"
                        icone="mdi-message"
                        rota="/messages"
                        nomePrincipal="Mensagens"
                        corAcesso="info"
                        dadosAcesso="Acessar"
                        ></UIItemMenu>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 p-2">
                        <UIItemMenu
                        corIcone="error"
                        icone="mdi-cog"
                        rota="/settings"
                        nomePrincipal="Configurações"
                        corAcesso="error"
                        dadosAcesso="Acessar"
                        ></UIItemMenu>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 p-2">
                        <UIItemMenu
                        corIcone="purple"
                        icone="mdi-help-circle"
                        rota="/help"
                        nomePrincipal="Ajuda"
                        corAcesso="purple"
                        dadosAcesso="Acessar"
                        ></UIItemMenu>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 p-2">
                        <UIItemMenu
                        corIcone="warning"
                        icone="mdi-email"
                        rota="/inbox"
                        nomePrincipal="Caixa de entrada"
                        corAcesso="warning"
                        dadosAcesso="Acessar"
                        ></UIItemMenu>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 p-2">
                        <UIItemMenu
                        corIcone="success"
                        icone="mdi-heart"
                        rota="/favorites"
                        nomePrincipal="Favoritos"
                        corAcesso="success"
                        dadosAcesso="Acessar"
                        ></UIItemMenu>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 p-2">
                        <UIItemMenu
                        corIcone="error"
                        icone="mdi-account-group"
                        rota="/contacts"
                        nomePrincipal="Contatos"
                        corAcesso="error"
                        dadosAcesso="Acessar"
                        ></UIItemMenu>
                    </div>
                    </div>    
                </div>        
            </v-col>
</template>
<style scoped>
.rounded-lg {
    border-radius: .5rem;
}
.align-items-center {
    align-items: center !important;
}
.justify-content-between {
    justify-content: space-between !important;
}
.fw-extrabold {
    font-weight: 700 !important;
}
.card {
    box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
    border-radius: .5rem;
}
</style>