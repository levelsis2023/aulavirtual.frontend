import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

interface tipogenero {
    name: string;
    value: number | null;
    code: string;
}

@Component({
    selector: 'app-formulario-oi',
    templateUrl: './formulario-oi.component.html',
    styleUrls: ['./formulario-oi.component.scss']
})
export class FormularioOiComponent implements OnInit {
    postulanteForm!: FormGroup;
    tipoGenero!: tipogenero[];
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

        this.postulanteForm = this.fb.group({
            nombres: ['', Validators.required],
            genero: [null, Validators.required] 
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
