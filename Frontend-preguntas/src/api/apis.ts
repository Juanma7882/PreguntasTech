const ESTATIC = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL 
};

const API_URLS = {
  etiquetas: `${ESTATIC.API_BASE_URL}etiquetas`,
  preguntas: `${ESTATIC.API_BASE_URL}preguntas`,
  etiquetaPreguntas: `${ESTATIC.API_BASE_URL}tarjetaEtiquetas`,
};

// =======================
// Cliente HTTP genérico
// =======================
async function consumirApi<T>(url: string): Promise<T> {
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(`Error HTTP: ${respuesta.status}`);
  }

  return respuesta.json();
}

// =======================
// Tipos (ejemplo)
// =======================
export interface Etiqueta {
  id: number;
  nombre: string;
}

export interface Pregunta {
  id: number;
  pregunta: string;
  respuesta: string;
  etiquetas?: Etiqueta[];
}

// =======================
// Funciones de API
// =======================
async function obtenerEtiquetas(): Promise<Etiqueta[]> {
  try {
    return await consumirApi<Etiqueta[]>(API_URLS.etiquetas);
  } catch (error) {
    console.error("Error al obtener etiquetas", error);
    throw error;
  }
}

async function obtenerPreguntas(): Promise<Pregunta[]> {
  try {
    return await consumirApi<Pregunta[]>(API_URLS.preguntas);
  } catch (error) {
    console.error("Error al obtener preguntas", error);
    throw error;
  }
}

async function obtenerEtiquetaConPregunta(): Promise<Pregunta[]> {
  try {
    return await consumirApi<Pregunta[]>(API_URLS.etiquetaPreguntas);
  } catch (error) {
    console.error("Error al obtener etiquetas con preguntas", error);
    throw error;
  }
}

export {
  obtenerEtiquetas,
  obtenerPreguntas,
  obtenerEtiquetaConPregunta,
};
