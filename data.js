// Base de datos completa de extensiones de la Notaría 134
const extensionesData = [
    // PLANTA BAJA
    { nombre: "Judith Guzman", extension: "5001", piso: "Planta Baja", sala: "" },
    { nombre: "Recepcion", extension: "5002", piso: "Planta Baja", sala: "" },
    { nombre: "Vigilancia", extension: "5003", piso: "Planta Baja", sala: "" },

    // PISO 1
    { nombre: "Sala 1", extension: "1001", piso: "Piso 1", sala: "Sala 1" },
    { nombre: "Sala 2", extension: "1002", piso: "Piso 1", sala: "Sala 2" },
    { nombre: "Sala A", extension: "1003", piso: "Piso 1", sala: "Sala A" },
    { nombre: "Sala B", extension: "1004", piso: "Piso 1", sala: "Sala B" },
    { nombre: "Sala C", extension: "1005", piso: "Piso 1", sala: "Sala C" },
    { nombre: "Sala D", extension: "1006", piso: "Piso 1", sala: "Sala D" },
    { nombre: "Rodolfo Arciniega", extension: "1008", piso: "Piso 1", sala: "" },
    { nombre: "Pasantes BMM", extension: "1011", piso: "Piso 1", sala: "" },
    { nombre: "Nancy Briano", extension: "1012", piso: "Piso 1", sala: "" },
    { nombre: "RPP, Balbina, Birtany", extension: "1013", piso: "Piso 1", sala: "" },
    { nombre: "Gabriela Sanchez", extension: "1014", piso: "Piso 1", sala: "" },
    { nombre: "Pasantes Roxxana", extension: "1018", piso: "Piso 1", sala: "" },
    { nombre: "Pasantes RCCG", extension: "1019", piso: "Piso 1", sala: "" },

    // PISO 2
    { nombre: "Liliana y Alberto", extension: "2001", piso: "Piso 2", sala: "" },
    { nombre: "Jeshua y Luis", extension: "2002", piso: "Piso 2", sala: "" },
    { nombre: "Cecilia Roman", extension: "2003", piso: "Piso 2", sala: "" },
    { nombre: "Martha Gonzalez", extension: "2004", piso: "Piso 2", sala: "" },
    { nombre: "Carmen Gonzalez", extension: "2005", piso: "Piso 2", sala: "" },
    { nombre: "Archivo", extension: "2006", piso: "Piso 2", sala: "" },
    { nombre: "Ditto", extension: "2007", piso: "Piso 2", sala: "" },
    { nombre: "Lic. Miguel Angel Linares", extension: "2008", piso: "Piso 2", sala: "" },
    { nombre: "Miguel Corona (SISTEMAS)", extension: "2009", piso: "Piso 2", sala: "" },
    { nombre: "Recursos Humanos", extension: "2010", piso: "Piso 2", sala: "" },
    { nombre: "Sistemas (TELEFONO INALAMBRICO)", extension: "8009", piso: "Piso 2", sala: "" },

    // PISO 3
    { nombre: "Valeria y Aldo", extension: "1007", piso: "Piso 3", sala: "" },
    { nombre: "Romina e Ivonne", extension: "1009", piso: "Piso 3", sala: "" },
    { nombre: "Diana Hernandez", extension: "1021", piso: "Piso 3", sala: "" },
    { nombre: "Ianira y Paola", extension: "3001", piso: "Piso 3", sala: "" },
    { nombre: "Yahir y Emilio", extension: "3003", piso: "Piso 3", sala: "" },
    { nombre: "Nabil y Daniel", extension: "3004", piso: "Piso 3", sala: "" },
    { nombre: "Karen Montes de Oca", extension: "3005", piso: "Piso 3", sala: "" },
    { nombre: "Juan Pablo Mora", extension: "3006", piso: "Piso 3", sala: "" },
    { nombre: "Fernanda y Donovan", extension: "3007", piso: "Piso 3", sala: "" },
    { nombre: "Hector Lopez", extension: "3009", piso: "Piso 3", sala: "" },
    { nombre: "Isabel, Isai y viridiana", extension: "3010", piso: "Piso 3", sala: "" },
    { nombre: "Alejandro, Rodrigo, Ines", extension: "3011", piso: "Piso 3", sala: "" },
    { nombre: "Lic. Benito Maltos", extension: "3013", piso: "Piso 3", sala: "" },
    { nombre: "Anabele Flores", extension: "3014", piso: "Piso 3", sala: "" },
    { nombre: "Hugo y Paulo", extension: "3015", piso: "Piso 3", sala: "" },
    { nombre: "Silvia Esquivel", extension: "3017", piso: "Piso 3", sala: "" },
    { nombre: "Alizaryn Cuahonte", extension: "3019", piso: "Piso 3", sala: "" },
    { nombre: "Daniel Basilio", extension: "3020", piso: "Piso 3", sala: "" },
    { nombre: "Sujey Gonzalez", extension: "3021", piso: "Piso 3", sala: "" },

    // PISO 4
    { nombre: "Lic. Omar Lozano", extension: "4001", piso: "Piso 4", sala: "" },
    { nombre: "Angelica y Diana", extension: "1020", piso: "Piso 4", sala: "" },
    { nombre: "Lic. Minerva Pacheco", extension: "4002", piso: "Piso 4", sala: "" },
    { nombre: "Roxana Ramirez", extension: "4003", piso: "Piso 4", sala: "" },
    { nombre: "Roberto Cisnero", extension: "4004", piso: "Piso 4", sala: "" },
    { nombre: "Dulce y Mireya", extension: "4005", piso: "Piso 4", sala: "" },
    { nombre: "Yadira Bernal", extension: "4006", piso: "Piso 4", sala: "" },
    { nombre: "Jacob Rangel", extension: "4007", piso: "Piso 4", sala: "" },
    { nombre: "Lourdes Ramirez", extension: "4010", piso: "Piso 4", sala: "" },
    { nombre: "Nadia Sanchez", extension: "4011", piso: "Piso 4", sala: "" },
    { nombre: "Fatima Moreno", extension: "4012", piso: "Piso 4", sala: "" },
    { nombre: "Gissell Contreras", extension: "4013", piso: "Piso 4", sala: "" },
    { nombre: "Yessica Bahena", extension: "4015", piso: "Piso 4", sala: "" },
    { nombre: "Rosa Maria Gutierrez", extension: "4016", piso: "Piso 4", sala: "" },
    { nombre: "Patricia Macedo", extension: "4017", piso: "Piso 4", sala: "" },
    { nombre: "Jessica Rodriguez", extension: "4018", piso: "Piso 4", sala: "" }
];

// Configuración de colores por piso (auras)
const pisoConfig = {
    "Planta Baja": {
        color: "#7C3AED", // Púrpura vibrante
        gradient: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
        shadow: "0 8px 32px rgba(124, 58, 237, 0.3)"
    },
    "Piso 1": {
        color: "#10B981", // Verde esmeralda
        gradient: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
        shadow: "0 8px 32px rgba(16, 185, 129, 0.3)"
    },
    "Piso 2": {
        color: "#3B82F6", // Azul brillante
        gradient: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
        shadow: "0 8px 32px rgba(59, 130, 246, 0.3)"
    },
    "Piso 3": {
        color: "#F59E0B", // Ámbar dorado
        gradient: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
        shadow: "0 8px 32px rgba(245, 158, 11, 0.3)"
    },
    "Piso 4": {
        color: "#EC4899", // Rosa magenta
        gradient: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)",
        shadow: "0 8px 32px rgba(236, 72, 153, 0.3)"
    }
};
