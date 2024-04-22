<template>
    <div class="h-full w-full" @click="navigateToRoute">
        <div class="widget-chart widget-chart-hover">

        <div class="widget-chart-flex flex-col">
            <div class="icon-shape rounded-lg p-4"
            :class="`icon-shape-${corIcone}`">
            <v-icon :icon="icone"></v-icon>
            </div> 
        </div>       

        <div class="widget-numbers" style="font-size: 1.3rem;">
          {{ nomePrincipal }}
          <small v-if="nomeSecundario" style="font-weight:normal;">
            <br>{{ nomeSecundario }}
          </small>
        </div>
        <div class="widget-subheading"  style="font-size: 1.1rem;">{{ descricao }}</div>
            <div class="widget-description"
            :class="`text-${corAcesso}`" 
            >
            <span class="pl-1" :class="{ 'font-bold': $route.path === rota }">{{ dadosAcesso }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      rota: String,
      corIcone: String,
      icone: String,
      nomePrincipal: String,
      nomeSecundario: {
        type: String,
        default: ''
      },
      descricao: String,
      corAcesso: String,
      dadosAcesso: String
    },
    methods: {
      navigateToRoute() {
        if (this.rota) {
          window.location.href = this.rota;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .has-secondary-text .widget-numbers {
    /* Ajuste o tamanho conforme necessário */
    font-size: 1.1rem;
  }
  .has-secondary-text .widget-subheading {
    /* Ajuste o tamanho conforme necessário */
    font-size: 0.9rem;
  }
.icon-shape-danger {
        color: #E11D48;
        background-color: rgba(225, 29, 72, 0.3);
    }
.icon-shape-primary {
  color: #3b82f6;
  background-color: rgba(59, 130, 246, 0.3);
}

.icon-shape-success {
  color: #10b981;
  background-color: rgba(16, 185, 129, 0.3);
}

.icon-shape-warning {
  color: #f59e0b;
  background-color: rgba(245, 158, 11, 0.3);
}

.icon-shape-info {
  color: #6b7280;
  background-color: rgba(107, 114, 128, 0.3);
}

.icon-shape-error {
  color: #ef4444;
  background-color: rgba(239, 68, 68, 0.3);
}

.icon-shape-purple {
  color: #8b5cf6;
  background-color: rgba(139, 92, 246, 0.3);
}

  </style>
  