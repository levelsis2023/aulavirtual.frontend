import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

interface tipogenero {
    name: string;
    value: number;
    code: string;
}

@Component({
    selector: 'app-formulario-oi',
    templateUrl: './formulario-oi.component.html',
    styleUrls: ['./formulario-oi.component.scss']
})
export class FormularioOiComponent{
    postulanteForm = FormGroup;
    tipoGenero!: tipogenero[];

    constructor(
        private fb: FormBuilder,
    ) {
        /*this.postulanteForm = this.fb.group({
            nombres: ['', Validators.required]
        });*/
    }
    ngOnInit() {
        this.tipoGenero = [
            { name: 'Masculino', value: 1, code: 'M' },
            { name: 'Femenino', value: 2, code: 'F' },
            { name: 'Otro', value: 3, code: 'O' },
        ]
    }
    savePostulante(){
        console.log(this.postulanteForm);
    }
}
