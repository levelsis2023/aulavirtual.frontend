export class Miembro {
    public nuIdMiembro: number | null = null
    public txnombre: string = '' 
    public txSituacion: string = ''  
    public txabreviatura: string = '' 
    public tx_item_description: string =''
    public nu_item: number | null = null  
    public created_at: Date | null = null    
    public dominio: string = ''

}

export class ApiResponse {
    public responseCode: string = '';
    public responseMessage: string = '';
    public response: any;
}
export class Base {
    public responseCode: number | null = null;
    public msgResultado: string = '';
    public response: any;
}

export class Parametro {
    public nuIdParametro: number | null = null
    public txNombre: string | null = ''
    public txAbreviatura: string|null = ''
    public nuItemNro: number | null = null
    public txItemDescripcion: string | null = null
    public isSelected: string | null = null
    public txUseCreado: string | null = null
    public txUseModificado: string | null = null
}