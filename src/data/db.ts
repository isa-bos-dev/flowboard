// src/data/db.ts

import { Task, User, Column, Priority } from '../types';

// Tareas iniciales
export const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Implementar login',
    description: 'Crear sistema de autenticación',
    assignees: ['1'],
    status: 'backlog',
    priority: 'high',
    dueDate: '2024-12-01',
  },
  {
    id: '2',
    title: 'Diseñar UI',
    description: 'Crear mockups en Figma',
    assignees: ['2', '3'],
    status: 'backlog',
    priority: 'medium',
    dueDate: '2024-11-20',
  },
];

// Usuarios
export const users: User[] = [
  { id: '1', name: 'Ana', avatar: '👩‍💻' },
  { id: '2', name: 'Carlos', avatar: '👨‍💻' },
  { id: '3', name: 'Elena', avatar: '👩‍🔬' },
];

// Columnas
export const columns: Column[] = [
  { id: 'backlog', title: 'Backlog' },
  { id: 'in-progress', title: 'En Progreso' },
  { id: 'review', title: 'En Revisión' },
  { id: 'done', title: 'Completado' },
];

// Prioridades
export const priorities: Priority[] = [
  { id: 'low', label: 'Baja', color: 'bg-green-500' },
  { id: 'medium', label: 'Media', color: 'bg-yellow-500' },
  { id: 'high', label: 'Alta', color: 'bg-red-500' },
];
