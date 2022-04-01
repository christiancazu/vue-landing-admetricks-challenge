export interface Service {
  title: string
  description: string
  icon: string
}

export const SERVICES: Service[] = [
  {
    title: 'Agencias',
    description: 'Crea mejores estrategias de marketing digital, planes de medios y reportes de resultados para tus clientes. Muéstrale qué está haciendo su competencia en publicidad online.',
    icon: 'light'
  },
  {
    title: 'Medios',
    description: 'Mejora tus argumentos de ventas conociendo en detalle la inversión de tus clientes en otros medios y el alcance que les aporta.us clientes en otros medios y el alcance que les aporta.',
    icon: 'desktop'
  },
  {
    title: 'Marcas',
    description: 'Descubre las ofertas y campañas que tu competencia está promocionando. Recibe alertas cuando tu competencia lanza una nueva campaña de publicidad online.',
    icon: 'megaphone'
  },
  {
    title: 'Verificación',
    description: 'Como un agente tercero, transparente y sin conflictos de interés, Admetricks permite a los actores de la industria del marketing digital verificar que sus campañas exhiban en los sitios y formatos pautados.',
    icon: 'verification'
  }
]
