import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

interface tipogenero {
    name: string;
    value: number | null;
    code: string;
}

interface tipodocumento {
    name:string;
    value:string;
}

interface estadocivil {
    name:string;
    value:string;
}

interface gradoinstruccion {
    name:string;
    value:string;
}

interface profesion {
    name:string;
    value:string;
}

interface ocupacionactual {
    name:string;
    value:string;
}

interface estadoactual {
    name: string;
    value: string;
}

interface nivelcargo {
    name: string;
    value: string;
}

interface puntaje {
    name: string;
    value: string;
}

interface gestion {
    name: string;
    value: string;
}

@Component({
    selector: 'app-formulario-oi',
    templateUrl: './formulario-oi.component.html',
    styleUrls: ['./formulario-oi.component.scss']
})
export class FormularioOiComponent implements OnInit {
    postulanteForm!: FormGroup;
    tipoGenero!: tipogenero[];
    tipoDocumento!: tipodocumento[];
    estadoCivil! : estadocivil[];
    gradoInstruccion! : gradoinstruccion[];
    profesion! : profesion[];
    ocupacionActual! : ocupacionactual[];
    estadoActual! : estadoactual[];
    nivelCargo! : nivelcargo[];
    puntaje! : puntaje[];
    gestion! : gestion[];
    selectedGenero: number | null = null;


    constructor(
        private fb: FormBuilder,
    ) { }

    ngOnInit() {
        this.tipoGenero = [
            { name: 'Masculino', value: 1, code: 'M' },
            { name: 'Femenino', value: 2, code: 'F' },
            { name: 'Otro', value: 3, code: 'O' },
        ];

        this.tipoDocumento = [
            { name: 'DNI', value: 'DNI' },
            { name: 'Pasaporte', value: 'PAS' },
        ];

        this.estadoCivil = [
            {name: 'Soltero', value: 'SOL'},
            {name: 'Conviviente', value: 'CON'},
            {name: 'Casado', value: 'CAS'},
            {name: 'Divorciado', value: 'DIV'},
            {name: 'Viudo', value: 'VIU'},
        ];

        this.gradoInstruccion = [
            {name: 'Primaria Incompleta', value: 'PRI'},
            {name: 'Primaria Completa', value: 'PRC'},
            {name: 'Secundaria Incompleta', value: 'SEI'},
            {name: 'Secundaria Completa', value: 'SEC'},
            {name: 'Técnico Incompleto', value: 'TEI'},
            {name: 'Técnico Egresado', value: 'TEE'},
            {name: 'Técnico Titulado', value: 'TET'},
            {name: 'Universitario Incompleto', value: 'UNI'},
            {name: 'Universitario Egresado', value: 'UNE'},
        ];

        this.estadoActual = [
            {name: 'Sentimiento Amazonense Regional', value: 'SAR'},
            {name: 'Otro Partido', value: 'OPA'},
            {name: 'Ningún Partido', value: 'NPA'},
        ];

        this.profesion = [
            {name: 'Ing. Sistemas', value: 'SIS'},
            {name: 'Ing. Civil', value: 'CIV'},
        ];

        this.ocupacionActual = [
            {name: 'Ocultar Mant', value: 'OCU'},
        ];

        this.nivelCargo = [
            {name: 'Operario', value: 'OPE'},
            {name: 'Asistente', value: 'ASI'},
            {name: 'Jefe', value: 'JEF'},
            {name: 'Directivo', value: 'DIR'},
            {name: 'Gerencia', value: 'GER'},
        ];

        this.puntaje = [
            {name: 'Regular', value: 'REG'},
            {name: 'Malo(a)', value: 'MAL'},
            {name: 'Pésimo(a)', value: 'PES'},
        ];

        this.gestion = [
            {name: 'Reprogramador', value: 'REP'},
        ];

        this.postulanteForm = this.fb.group({
            nombres: ['', Validators.required],
            genero: [null, Validators.required] ,
            documento: [null, Validators.required],
            instruccion: [null, Validators.required],
            profesion: [null, Validators.required],
            actual : [null, Validators.required],
            civil: [null, Validators.required],
            estado: [null, Validators.required],
            cargo: [null, Validators.required],
            puntaje: [null, Validators.required],
            gestion: [null,Validators.required],
        });
    }

    onGeneroChange(value: number | null) {
        this.selectedGenero = value;
        this.postulanteForm.patchValue({ genero: value });
    }

    savePostulante() {
        console.log(this.postulanteForm.value);
    }
}
