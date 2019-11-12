import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  data: Object = {
    "data" :[
        [ '','','','','','','','','','','','','','','','','','','','',0],
        [ 2188225,  352643, "BL01", "MD Popelina", 1004510229, 120542310,  120.00,  6.00,  "RV26981",  true, '',0,'=L2*30',0,0,'=N2*O2',0,0,'=M2+P2+Q2+R2',0,'' ],
        [ 2188225,  352643, "BL01", "MD Popelina", 1004510229, 120542310,  120.00,  6.00,  "RV26981",  true, '',0,'=l3*30',0,0,'=N3*O3',0,0,'=M3+P3+Q3+R3',0,''  ],
        [ 2188225,  352643, "BL01", "MD Popelina", 1004510229, 120542310,  120.00,  6.00,  "RV26981",  true, '',0,'=l4*30',0,0,'=N4*O4',0,0,'=M4+P4+Q4+R4',0,''  ],
        [ 2188225,  352643, "BL01", "MD Popelina", 1004510229, 120542310,  120.00,  6.00,  "RV26981",  true, '',0,'=l5*30',0,0,'=N5*O5',0,0,'=M5+P5+Q5+R5',0,''  ],
        [ 2188225,  526345, "7000", "MD Popelina", 1004510229, 120542310,  120.00,  6.00,  "RV26981",  true, '',0,'=l6*30',0,0,'=N6*O6',0,0,'=M6+P6+Q6+R6',0,''  ],
        [ 2188225,  526345, "7000", "MD Popelina", 1004510229, 120542310,  120.00,  6.00,  "RV26981",  true, '',0,'=l7*30',0,0,'=N7*O7',0,0,'=M7+P7+Q7+R7',0,''  ],
        [ 2188225,  526345, "7000", "MD Popelina", 1004510229, 120542310,  120.00,  6.00,  "RV26981",  true, '',0,'=l8*30',0,0,'=N8*O8',0,0,'=M8+P8+Q8+R8',0,''  ],
        [ 2188225,  526345, "7000", "MD Popelina", 1004510229, 120542310,  120.00,  6.00,  "RV26981",  true, '',0,'=l9*30',0,0,'=N9*O9',0,0,'=M9+P9+Q9+R9',0,''  ],
        [ 2188225,  425163, "7000", "MD Popelina", 1004510229, 120542310,  120.00,  6.00,  "RV26981",  true, '',0,'=l10*30',0,0,'=N10*O10',0,0,'=M10+P10+Q10+R10',0,''  ],
        [ 2188225,  425163, "7000", "MD Popelina", 1004510229, 120542310,  120.00,  6.00,  "RV26981",  true, '',0,'=l11*30',0,0,'=N11*O11',0,0,'=M11+P11+Q11+R11',0,''  ],
        [ 2188225,  425163, "7000", "MD Popelina", 1004510229, 120542310,  120.00,  6.00,  "RV26981",  true, '',0,'=l12*30',0,0,'=N12*O12',0,0,'=M12+P12+Q12+R12',0,''  ],
        [ 2188225,  203156, "BL01", "MD Popelina", 1004510229, 120542310,  120.00,  6.00,  "RV26981",  true, '',0,'=l13*30',0,0,'=N13*O13',0,0,'=M13+P13+Q13+R13',0,''  ],
        [ 2188225,  203156, "BL01", "MD Popelina", 1004510229, 120542310,  120.00,  6.00,  "RV26981",  true, '',0,'=l14*30',0,0,'=N14*O14',0,0,'=M14+P14+Q14+R14',0,''  ],
        [ '',  '', '',  , '','Total','','','','','','Total','=SUM(M2:M14)','','Total','=SUM(P2:P14)','=SUM(Q2:Q14)','=SUM(R2:R14)','=SUM(S2:S14)','=SUM(T2:T14)','']
    ],
    "headers" : [
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", { "label": "Trazo 1", "colspan": 3 }, { "label": "Liquidacion", "colspan": 3 }],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", { "label": "Largo", "colspan": 3 }],
      ["Orden", "Material", "V.matriz", "Texto", "Espiga", "Lote", "Cantidad", "Ancho", "Lote Provedor", "Cond", "Capa Final", "# Capas", "Subtotal", "Puntas", "Liquidacion", "SubtotalLiq", "Tiras", "Devolucion", "Total", "Diferencia", "Observaciones"]
    ],
    "columns": [
      { "data": "Orden", "readOnly": true },
      { "data": "Material", "readOnly": true },
      { "data": "V.matriz", "readOnly": true },
      { "data": "Texto", "readOnly": true },
      { "data": "Espiga", "readOnly": true },
      { "data": "Lote", "readOnly": true },
      { "data": "Cantidad", "readOnly": true },
      { "data": "Ancho", "readOnly": true },
      { "data": "Lote Provedor", "readOnly": true },
      { "data": "Cond", "readOnly": true },
      { "data": "Capa Final" },
      { "data": "# Capas" },
      { "data": "Subtotal" },
      { "data": "Puntas" },
      { "data": "Liquidacion" },
      { "data": "SubtotalLiq" },
      { "data": "Tiras" },
      { "data": "Devolucion" },
      { "data": "Total" },
      { "data": "Diferencia" },
      { "data": "Observaciones" }
  ]
}



  getHello(): Object {
    return this.data;
  }
}
