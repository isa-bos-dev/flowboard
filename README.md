# 🗂️ FlowBoard - Kanban App con React

Aplicación Kanban interactiva y moderna que permite organizar y gestionar tareas de manera eficiente. FlowBoard está diseñado para facilitar la gestión de proyectos, con un enfoque visual y funcional que ayuda a mantener el control de cada tarea. Ideal para integrarlo en tu flujo de trabajo o portafolio.

## 📋 Descripción del Proyecto

**FlowBoard** es una aplicación de gestión de tareas tipo Kanban, creada con **React** y **TypeScript**. La interfaz está optimizada para una experiencia de usuario rápida y atractiva, y cuenta con:

- **Organización de Tareas en Columnas**: Cada tarea puede moverse entre columnas ("backlog", "en progreso", "en revisión" y "completado").
- **Sistema de Prioridad y Fecha Límite**: Configura la prioridad de cada tarea y asigna fechas límite para mantener el control de plazos.
- **Asignación de Usuarios**: Las tareas pueden asignarse a usuarios específicos. Las tareas sin asignación no pueden salir del backlog.
- **Control de Acciones**: Crea, edita, elimina y mueve tareas fácilmente en el tablero.

---

## 🛠️ Tecnologías y Librerías

### 📦 Frontend

- **[Vite](https://vitejs.dev/)**: Para una configuración rápida y ligera del proyecto.
- **[React](https://reactjs.org/)** con **[TypeScript](https://www.typescriptlang.org/)**: Para una experiencia de desarrollo segura y eficiente.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS para un diseño rápido y personalizable.
- **[Lucide Icons](https://lucide.dev/)**: Conjunto de íconos SVG para un diseño moderno e intuitivo.

## 📐 Estructura del Proyecto

El proyecto está estructurado en componentes reutilizables, facilitando la organización y escalabilidad del código:

- **App.tsx**: Punto de entrada principal de la aplicación.
- **KanbanBoard**: Contenedor principal del tablero Kanban.
  - **Column**: Columnas del tablero para cada estado de tarea.
  - **TaskForm**: Formulario para agregar y editar tareas.
  - **TaskCard**: Componente visual de cada tarea.
  - **UserFilterButtons** y **Header**: Elementos de interfaz para gestionar filtros y visualización de usuarios.

## 🌟 Características Destacadas

- **Alertas Dinámicas**: Notifica al usuario cuando intenta mover tareas sin asignación de usuario.
- **Filtro por Usuario**: Muestra solo las tareas asignadas al usuario seleccionado.
- **Diseño Adaptativo**: La interfaz se adapta a distintos tamaños de pantalla para una experiencia uniforme en todos los dispositivos.
- **Feedback Visual en Deadlines**: Fechas límite con alertas visuales: ⚠️ Fondo anaranjado si es hoy y 🔴 fondo rojo si la fecha ha pasado.

## 📝 Instalación y Configuración

### 1. Clona el repositorio

```bash
git clone https://github.com/isabosdeb/FlowBoard.git
cd FlowBoard
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Inicia la aplicación

```bash
npm run dev
```
