const cursos = {
  "MAT1610": {
    "nombre": "C\u00e1lculo I",
    "semestre": 1,
    "prerrequisitos": [],
    "desbloquea": [
      "MAT1620"
    ]
  },
  "EAA1110": {
    "nombre": "Comportamiento Organizacional",
    "semestre": 1,
    "prerrequisitos": [],
    "desbloquea": [
      "EAA2310"
    ]
  },
  "EAA1210": {
    "nombre": "Contabilidad",
    "semestre": 1,
    "prerrequisitos": [],
    "desbloquea": [
      "EAA1220",
      "EAA2310"
    ]
  },
  "EAE1110": {
    "nombre": "Intro a Microeconom\u00eda",
    "semestre": 1,
    "prerrequisitos": [],
    "desbloquea": [
      "EAE1210"
    ]
  },
  "MAT1620": {
    "nombre": "C\u00e1lculo II",
    "semestre": 2,
    "prerrequisitos": [
      "MAT1610"
    ],
    "desbloquea": [
      "EAF2010"
    ]
  },
  "EAA1510": {
    "nombre": "Probabilidad y Estad\u00edstica",
    "semestre": 2,
    "prerrequisitos": [],
    "desbloquea": [
      "EAA1220",
      "EAA1520"
    ]
  },
  "EAA1500": {
    "nombre": "Intro a \u00c1lgebra Lineal",
    "semestre": 2,
    "prerrequisitos": [],
    "desbloquea": [
      "EAA1520",
      "EAF2010"
    ]
  },
  "EAE1210": {
    "nombre": "Intro a Macroeconom\u00eda",
    "semestre": 2,
    "prerrequisitos": [
      "EAE1110"
    ],
    "desbloquea": [
      "EAE1220"
    ]
  },
  "FIL2001": {
    "nombre": "Filosof\u00eda para qu\u00e9",
    "semestre": 2,
    "prerrequisitos": [],
    "desbloquea": []
  },
  "EAA1520": {
    "nombre": "Inferencia Estad\u00edstica",
    "semestre": 3,
    "prerrequisitos": [
      "EAA1510"
    ],
    "desbloquea": [
      "EAE2510"
    ]
  },
  "EAF2010": {
    "nombre": "Aplicaci\u00f3n Matem\u00e1ticas",
    "semestre": 3,
    "prerrequisitos": [
      "EAA1510",
      "MAT1620"
    ],
    "desbloquea": [
      "EAE2110",
      "EAE2120"
    ]
  },
  "EAE1220": {
    "nombre": "An\u00e1lisis Econ\u00f3mico",
    "semestre": 3,
    "prerrequisitos": [
      "EAE1210"
    ],
    "desbloquea": [
      "EAE2110",
      "EAE2210",
      "ETI209"
    ]
  },
  "EAA1220": {
    "nombre": "Fundamentos de Finanzas",
    "semestre": 3,
    "prerrequisitos": [
      "EAA1510"
    ],
    "desbloquea": [
      "EAA2410"
    ]
  },
  "TTF": {
    "nombre": "Teol\u00f3gico",
    "semestre": 3,
    "prerrequisitos": [],
    "desbloquea": []
  },
  "EAE2510": {
    "nombre": "Econometr\u00eda",
    "semestre": 4,
    "prerrequisitos": [
      "EAA1520"
    ],
    "desbloquea": [
      "EAA2320"
    ]
  },
  "EAE2120": {
    "nombre": "Microeconom\u00eda I",
    "semestre": 4,
    "prerrequisitos": [
      "EAF2010"
    ],
    "desbloquea": [
      "EAE2220",
      "EAF2500"
    ]
  },
  "EAA2410": {
    "nombre": "Estrategia de la Organizaci\u00f3n",
    "semestre": 4,
    "prerrequisitos": [
      "EAE1110",
      "EAA1220"
    ],
    "desbloquea": [
      "EAA2420",
      "EAA2220",
      "EAA2230",
      "ETI209"
    ]
  },
  "EAA2310": {
    "nombre": "Fundamentos de Marketing",
    "semestre": 4,
    "prerrequisitos": [
      "EAA1510",
      "EAA1110",
      "EAA1210"
    ],
    "desbloquea": [
      "EAA2320",
      "EAF2500"
    ]
  },
  "FG4": {
    "nombre": "Formaci\u00f3n General",
    "semestre": 4,
    "prerrequisitos": [],
    "desbloquea": []
  },
  "IIC1103": {
    "nombre": "Intro a Programaci\u00f3n",
    "semestre": 5,
    "prerrequisitos": [],
    "desbloquea": [
      "EAA2210"
    ]
  },
  "EAE2110": {
    "nombre": "Microeconom\u00eda II",
    "semestre": 5,
    "prerrequisitos": [
      "EAE1220"
    ],
    "desbloquea": [
      "EAA2420"
    ]
  },
  "EAE2210": {
    "nombre": "Macroeconom\u00eda I",
    "semestre": 5,
    "prerrequisitos": [
      "EAE1220"
    ],
    "desbloquea": [
      "EAE2220"
    ]
  },
  "EAA2210": {
    "nombre": "Teor\u00eda Financiera",
    "semestre": 5,
    "prerrequisitos": [
      "EAA2410",
      "EAA1520"
    ],
    "desbloquea": [
      "EAA2240"
    ]
  },
  "FG5": {
    "nombre": "Formaci\u00f3n General",
    "semestre": 5,
    "prerrequisitos": [],
    "desbloquea": []
  },
  "MIN6": {
    "nombre": "Curso Minor",
    "semestre": 6,
    "prerrequisitos": [],
    "desbloquea": []
  },
  "EAA2420": {
    "nombre": "Estrategia Competitiva",
    "semestre": 6,
    "prerrequisitos": [
      "EAA2410"
    ],
    "desbloquea": [
      "EAA3501",
      "EAA3601"
    ]
  },
  "EAA2220": {
    "nombre": "Contabilidad de Costos",
    "semestre": 6,
    "prerrequisitos": [
      "EAA2410"
    ],
    "desbloquea": [
      "EAA2240"
    ]
  },
  "EAA2320": {
    "nombre": "Marketing Analytics",
    "semestre": 6,
    "prerrequisitos": [
      "EAE2510",
      "EAA2310"
    ],
    "desbloquea": [
      "EAA3401"
    ]
  },
  "ETI209": {
    "nombre": "\u00c9tica Econom\u00eda y Empresa",
    "semestre": 6,
    "prerrequisitos": [
      "EAA2410",
      "EAE1220"
    ],
    "desbloquea": []
  },
  "FG6": {
    "nombre": "Formaci\u00f3n General",
    "semestre": 6,
    "prerrequisitos": [],
    "desbloquea": []
  },
  "MIN7": {
    "nombre": "Curso Minor",
    "semestre": 7,
    "prerrequisitos": [],
    "desbloquea": []
  },
  "EAA2230": {
    "nombre": "Empresa y Legislaci\u00f3n",
    "semestre": 7,
    "prerrequisitos": [
      "EAA2410"
    ],
    "desbloquea": []
  },
  "EAE2220": {
    "nombre": "Macroeconom\u00eda II",
    "semestre": 7,
    "prerrequisitos": [
      "EAE2210"
    ],
    "desbloquea": []
  },
  "EAA2240": {
    "nombre": "Contabilidad Gerencial",
    "semestre": 7,
    "prerrequisitos": [
      "EAA2210",
      "EAA2220"
    ],
    "desbloquea": [
      "EAA3201",
      "EAA3401"
    ]
  },
  "EAA2110": {
    "nombre": "Direcci\u00f3n de Personas",
    "semestre": 7,
    "prerrequisitos": [
      "EAA1110",
      "FIL2001"
    ],
    "desbloquea": [
      "EAA3401",
      "EAA3101"
    ]
  },
  "FG7": {
    "nombre": "Formaci\u00f3n General",
    "semestre": 7,
    "prerrequisitos": [],
    "desbloquea": []
  },
  "MIN8": {
    "nombre": "Curso Minor",
    "semestre": 8,
    "prerrequisitos": [],
    "desbloquea": []
  },
  "EAF2500": {
    "nombre": "Pr\u00e1ctica Social",
    "semestre": 8,
    "prerrequisitos": [
      "EAE2120",
      "EAE2210",
      "EAA2310"
    ],
    "desbloquea": [
      "EAA3500"
    ]
  },
  "FG8": {
    "nombre": "Formaci\u00f3n General",
    "semestre": 8,
    "prerrequisitos": [],
    "desbloquea": []
  },
  "EAA3401": {
    "nombre": "Direcci\u00f3n de Empresas y Estrategia",
    "semestre": 9,
    "prerrequisitos": [
      "EAA2110",
      "EAA2240",
      "EAA2320"
    ],
    "desbloquea": [
      "EAA3601",
      "EAA3101"
    ]
  },
  "EAA3201": {
    "nombre": "Direcci\u00f3n Financiera",
    "semestre": 9,
    "prerrequisitos": [
      "EAA2240"
    ],
    "desbloquea": [
      "EAA3601"
    ]
  },
  "EAA3501": {
    "nombre": "Gesti\u00f3n de Operaciones",
    "semestre": 9,
    "prerrequisitos": [
      "EAE2510",
      "EAA2420"
    ],
    "desbloquea": []
  },
  "OPR9": {
    "nombre": "OPR",
    "semestre": 9,
    "prerrequisitos": [],
    "desbloquea": []
  },
  "EAA3601": {
    "nombre": "Creaci\u00f3n de Nuevas Empresas",
    "semestre": 10,
    "prerrequisitos": [
      "EAA3401",
      "EAA3201",
      "EAA2420"
    ],
    "desbloquea": [
      "EAA3500"
    ]
  },
  "EAA3101": {
    "nombre": "Liderazgo Estrat\u00e9gico",
    "semestre": 10,
    "prerrequisitos": [
      "EAA2110",
      "EAA3401"
    ],
    "desbloquea": []
  },
  "OPR10": {
    "nombre": "OPR",
    "semestre": 10,
    "prerrequisitos": [],
    "desbloquea": []
  },
  "EAA3500": {
    "nombre": "Pr\u00e1ctica Profesional",
    "semestre": 10,
    "prerrequisitos": [
      "EAF2500"
    ],
    "desbloquea": []
  }
};


const estadoCursos = {};

function crearMalla() {
  const malla = document.getElementById("malla");
  const semestres = {};

  // Agrupar cursos por semestre
  for (const codigo in cursos) {
    const curso = cursos[codigo];
    if (!semestres[curso.semestre]) semestres[curso.semestre] = [];
    semestres[curso.semestre].push({ codigo, ...curso });
    estadoCursos[codigo] = false;
  }

  // Crear elementos HTML por semestre
  for (const semestre in semestres) {
    const contenedor = document.createElement("div");
    contenedor.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${semestre}`;
    contenedor.appendChild(titulo);

    semestres[semestre].forEach(curso => {
      const div = document.createElement("div");
      div.className = "curso bloqueado";
      div.textContent = `${curso.nombre} (${curso.codigo})`;
      div.id = curso.codigo;
      div.onclick = () => marcarCurso(curso.codigo);
      contenedor.appendChild(div);
    });

    malla.appendChild(contenedor);
  }

  actualizarEstado();
}

function marcarCurso(codigo) {
  if (!puedeTomarse(codigo)) return;
  estadoCursos[codigo] = !estadoCursos[codigo];
  actualizarEstado();
}

function puedeTomarse(codigo) {
  const curso = cursos[codigo];
  return curso.prerrequisitos.every(pr => estadoCursos[pr]);
}

function actualizarEstado() {
  for (const codigo in cursos) {
    const curso = cursos[codigo];
    const div = document.getElementById(codigo);
    const completado = estadoCursos[codigo];
    const habilitado = puedeTomarse(codigo);

    div.className = "curso";
    if (completado) div.classList.add("completado");
    else if (!habilitado) div.classList.add("bloqueado");
    else div.classList.add("desbloqueado");
  }
}

window.onload = crearMalla;
