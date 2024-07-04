export class Base {
         id: number;
     	situacion: string;
     	estado: string;
    constructor() {
        this.id = 0;
        this.situacion = ''; 
        this.estado = '1';
        
    }

    public getId() {
        return this.id;
    }
    public setId( id: number ) {
        this.id = id;
    }
    public getSituacion() {
        return this.situacion;
    }
    public setSituacion( situacion: string ) {
        this.situacion = situacion;
    }
    public getEstado() {
        return this.estado;
    }
    public setEstado( estado: string ) {
        this.estado = estado;
    }    
}
