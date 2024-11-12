// src/types/index.ts

export interface Task {
    id: string;
    title: string;
    description: string;
    assignees: string[];
    status: string;
    priority: string;
    dueDate: string;
  }
  
  export interface User {
    id: string;
    name: string;
    avatar: string;
  }
  
  export interface Column {
    id: string;
    title: string;
  }
  
  export interface Priority {
    id: string;
    label: string;
    color: string;
  }
  