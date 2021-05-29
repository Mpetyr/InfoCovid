import { Component, OnInit } from '@angular/core';
import { GraficosService} from '../../services/graficos.service'
import { DatePipe } from '@angular/common'

import {Chart} from 'chart.js'

//modelo
import {Paciente} from '../../modelos/paciente'

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  title ="app"

  //contador Global para celdas vacias
  contVacias = 0;

  limiteDatos = 1000000;

  //datos grafica sexo
  chartSexo: Chart;
  contM = 0;
  contF = 0;

  //datos grafica recuperacion
  chartRecuperacion: Chart;
  contPcr = 0;
  contTiempo = 0;

  //datos pertenencia etnica
  chartEtnia: Chart;
  contOtro = 0;
  contOtroFallecido = 0;
  contOtroRecuperado = 0;
  contOtroInfectado = 0;
  contOtroSinInformacion = 0;
  contIndigena = 0;
  contIndigenaFallecido = 0;
  contIndigenaRecuperado = 0;
  contIndigenaInfectado = 0;
  contIndigenaSinInformacion = 0;
  contNegro = 0;
  contNegroFallecido = 0;
  contNegroRecuperado = 0;
  contNegroInfectado = 0;
  contNegroSinInformacion = 0;
  contVaciasFallecido = 0;
  contVaciasRecuperado = 0;
  contVaciasInfectado = 0;
  contVaciasSinInformacion = 0;
  contRom = 0;
  contRomFallecido = 0;
  contRomRecuperado = 0;
  contRomInfectado = 0;
  contRomSinInformacion = 0;

  //datos grafica infectados por mes
  chartInfectadosMeses: Chart;
  contMarzoLeve = 0;
  contMarzoModerado = 0;
  contMarzoGrave = 0;
  contMarzoAsintomatico = 0;
  contMarzoFallecido = 0;

  contAbrilLeve = 0;
  contAbrilModerado = 0;
  contAbrilGrave = 0;
  contAbrilAsintomatico = 0;
  contAbrilFallecido = 0;
  
  contMayoLeve = 0;
  contMayoModerado = 0;
  contMayoGrave = 0;
  contMayoAsintomatico = 0;
  contMayoFallecido = 0;

  contJunioLeve = 0;
  contJunioModerado = 0;
  contJunioGrave = 0;
  contJunioAsintomatico = 0;
  contJunioFallecido = 0;

  contJulioLeve = 0;
  contJulioModerado = 0;
  contJulioGrave = 0;
  contJulioAsintomatico = 0;
  contJulioFallecido = 0;

  contAgostoLeve = 0;
  contAgostoModerado = 0;
  contAgostoGrave = 0;
  contAgostoAsintomatico = 0;
  contAgostoFallecido = 0;

  contSeptiembreLeve = 0;
  contSeptiembreModerado = 0;
  contSeptiembreGrave = 0;
  contSeptiembreAsintomatico = 0;
  contSeptiembreFallecido = 0;

  contOctubreLeve = 0;
  contOctubreModerado = 0;
  contOctubreGrave = 0;
  contOctubreAsintomatico = 0;
  contOctubreFallecido = 0;

  contNoviembreLeve = 0;
  contNoviembreModerado = 0;
  contNoviembreGrave = 0;
  contNoviembreAsintomatico = 0;
  contNoviembreFallecido = 0;

  contDiciembreLeve = 0;
  contDiciembreModerado = 0;
  contDiciembreGrave = 0;
  contDiciembreAsintomatico = 0;
  contDiciembreFallecido = 0;


  //Infectador por gurpo hetareo

  charGrupoEtario: Chart;
  cont1M = 0;
  cont1F = 0;
  cont2M = 0;
  cont2F = 0;
  cont3M = 0;
  cont3F = 0;
  cont4M = 0;
  cont4F = 0;
  cont5M = 0;
  cont5F = 0;
  cont6M = 0;
  cont6F = 0;
  cont7M = 0;
  cont7F = 0;
  cont8M = 0;
  cont8F = 0;
  cont9M = 0;
  cont9F = 0;
  cont10M = 0;
  cont10F = 0;
  cont11M = 0;
  cont11F = 0;
  cont12M = 0;
  cont12F = 0;
  cont13M = 0;
  cont13F = 0;
  cont14M = 0;
  cont14F = 0;
  cont15M = 0;
  cont15F = 0;
  cont16M = 0;
  cont16F = 0;
  cont17M = 0;
  cont17F = 0;

  //Estado infectados por grupo etario

  chartEstadoGrupoEtario: Chart;
  cont1Leve = 0;
  cont1Moderado = 0;
  cont1Grave = 0;
  cont1Asintomatico = 0;
  cont1Fallecido = 0;

  cont2Leve = 0;
  cont2Moderado = 0;
  cont2Grave = 0;
  cont2Asintomatico = 0;
  cont2Fallecido = 0;
  
  cont3Leve = 0;
  cont3Moderado = 0;
  cont3Grave = 0;
  cont3Asintomatico = 0;
  cont3Fallecido = 0;

  cont4Leve = 0;
  cont4Moderado = 0;
  cont4Grave = 0;
  cont4Asintomatico = 0;
  cont4Fallecido = 0;

  cont5Leve = 0;
  cont5Moderado = 0;
  cont5Grave = 0;
  cont5Asintomatico = 0;
  cont5Fallecido = 0;

  cont6Leve = 0;
  cont6Moderado = 0;
  cont6Grave = 0;
  cont6Asintomatico = 0;
  cont6Fallecido = 0;

  cont7Leve = 0;
  cont7Moderado = 0;
  cont7Grave = 0;
  cont7Asintomatico = 0;
  cont7Fallecido = 0;

  cont8Leve = 0;
  cont8Moderado = 0;
  cont8Grave = 0;
  cont8Asintomatico = 0;
  cont8Fallecido = 0;

  cont9Leve = 0;
  cont9Moderado = 0;
  cont9Grave = 0;
  cont9Asintomatico = 0;
  cont9Fallecido = 0;

  cont10Leve = 0;
  cont10Moderado = 0;
  cont10Grave = 0;
  cont10Asintomatico = 0;
  cont10Fallecido = 0;

  cont11Leve = 0;
  cont11Moderado = 0;
  cont11Grave = 0;
  cont11Asintomatico = 0;
  cont11Fallecido = 0;

  cont12Leve = 0;
  cont12Moderado = 0;
  cont12Grave = 0;
  cont12Asintomatico = 0;
  cont12Fallecido = 0;

  cont13Leve = 0;
  cont13Moderado = 0;
  cont13Grave = 0;
  cont13Asintomatico = 0;
  cont13Fallecido = 0;

  cont14Leve = 0;
  cont14Moderado = 0;
  cont14Grave = 0;
  cont14Asintomatico = 0;
  cont14Fallecido = 0;

  cont15Leve = 0;
  cont15Moderado = 0;
  cont15Grave = 0;
  cont15Asintomatico = 0;
  cont15Fallecido = 0;

  cont16Leve = 0;
  cont16Moderado = 0;
  cont16Grave = 0;
  cont16Asintomatico = 0;
  cont16Fallecido = 0;

  cont17Leve = 0;
  cont17Moderado = 0;
  cont17Grave = 0;
  cont17Asintomatico = 0;
  cont17Fallecido = 0;

  //contador datos

  contRecuperados = 0;
  contFallecidos = 0;
  contConfirmados = 0;
  contMortalidad = 0;
  contLetalidad = 0;


  depto = "Seleccione un departamento o distrito";

    constructor(private _graficos: GraficosService, private datepipe:DatePipe) { }

  depa(depto: string){

    this.depto=depto;
    this.depto;

    Chart.defaults.global.defaultFontColor = 'white';

    this._graficos.getData(`?$limit=${this.limiteDatos}&$select=sexo,atenci_n
    &$where=departamento = '${this.depto}'`).subscribe((res: Paciente[]) => {

              //condicion grafica sexo
      
              res.forEach(res => {



                if (res.atenci_n == "Recuperado"){
                  this.contRecuperados++;
                }
          
                if (res.atenci_n == "Fallecido") {
                  this.contFallecidos++;
                }
          
                if (res.atenci_n == 'Casa' || res.atenci_n == "Hospital" || res.atenci_n == 'Hospital UCI'){
                      this.contConfirmados++;
                }

                this.contLetalidad = parseFloat(((this.contFallecidos /(this.contFallecidos + this.contRecuperados + this.contConfirmados)) * 100)
                .toFixed(2));
                console.log(this.contLetalidad)
        
              if (res.sexo =='M' || res.sexo == 'm') {
                this.contM++;
              }
        
                if (res.sexo =='F' || res.sexo == 'f') {
                this.contF++;
              }
        
            }
            );  //inicioGraficos
        
        //Inicio Graficas sexo
        
        this.chartSexo = new Chart('sexo', {
        
          type: 'pie',
          data:{
            labels: ['Hombres', 'Mujeres'],
            datasets: [{
              label: 'Género',
              data: [this.contM, this.contF],
        
              backgroundColor:[
                'rgb(60, 198, 42)',
                'rgb(176, 76, 206)'
              ],
              borderColor: [
                'rgb(13, 91, 10)',
                'rgb(91, 10, 84)',
              ],
              borderWidth: 2
            }]
          },
        
          options: {
        
             animation:{
              duration: 2000
            },
            hover: {
              animationDuration: 2000
            },
        
          }
        })
    })


    //fin grafica sexo

    //condicion grafica tipo de recuperacion

    this._graficos.getData(`?$limit=${this.limiteDatos}&$select=tipo_recuperaci_n
    &$where=departamento = '${this.depto}'`).subscribe((res: Paciente[]) => {

      res.forEach(res => {


        if (res.tipo_recuperaci_n =='PCR'){
          this.contPcr++;
      }
      
        if (res.tipo_recuperaci_n =='Tiempo'){
          this.contTiempo++;
      }
      
        if (res.tipo_recuperaci_n == null){
          this.contVacias++;
      }
      
      }
      );
      
      //Inicio graficas tipo recuperacion
      
      this.chartRecuperacion = new Chart('recuperacion', {
      
        type: 'pie',
        data:{
          labels: ['PCR', 'Tiempo', 'No especifica'],
          datasets: [{
            label: 'Tipo de recuperacion',
            data: [this.contPcr, this.contTiempo, this.contVacias],
      
            backgroundColor:[
              'rgb(60, 198, 42)',
              'rgb(176, 76, 206)',
              'rgb(63, 192, 192)'
            ],
            borderColor: [
              'rgb(0, 0, 0)',
              'rgb(0, 0, 0)',
              'rgb(0, 0, 0)'
            ],
            borderWidth: 2
          }]
        },
      
        options: {
      
           animation:{
            duration: 2000
          },
          hover: {
            animationDuration: 2000
          },
      
        }
      }
      )
      
      //volvemos a poner el contador global en cero
      
      this.contVacias = 0;


    })

    //fin grafica

    //condicion grafica de etnia


this._graficos.getData(`?$limit=${this.limiteDatos}&$select=pertenencia_etnica,atenci_n
&$where=departamento = '${this.depto}'`).subscribe((res: Paciente[]) => {

res.forEach(res => {

  //Otro

if (res.pertenencia_etnica == 'Otro'){
    this.contOtro++;
}

if (res.pertenencia_etnica == 'Otro' && res.atenci_n == 'Recuperado'){
  this.contOtroRecuperado++;
}

if (res.pertenencia_etnica == 'Otro' && res.atenci_n == 'Fallecido'){
  this.contOtroFallecido++;
}

if (res.pertenencia_etnica == 'Otro' && res.atenci_n != 'Recuperado' && res.atenci_n != 'Fallecido' 
    && res.atenci_n != 'N/A'){
  this.contOtroInfectado++;
}

if (res.pertenencia_etnica == 'Otro' && res.atenci_n == 'N/A'){
  this.contOtroSinInformacion++;
}

//Negro

if (res.pertenencia_etnica == 'Negro'){
  this.contNegro++;
}

if (res.pertenencia_etnica == 'Negro' && res.atenci_n == 'Recuperado'){
  this.contNegroRecuperado++;
}

if (res.pertenencia_etnica == 'Negro' && res.atenci_n != 'Recuperado' && res.atenci_n != 'Fallecido'
    && res.atenci_n != 'N/A'){
  this.contNegroInfectado++;
}

if (res.pertenencia_etnica == 'Negro' && res.atenci_n == 'Fallecido'){
  this.contNegroFallecido++;
}

if (res.pertenencia_etnica == 'Negro' && res.atenci_n == 'N/A'){
  this.contNegroSinInformacion++;
}

//Indigena

if (res.pertenencia_etnica == 'Indígena' ){
  this.contIndigena++;
}

if (res.pertenencia_etnica == 'Indígena' && res.atenci_n == 'Recuperado'){
  this.contIndigenaRecuperado++;
}

if (res.pertenencia_etnica == 'Indígena' && res.atenci_n != 'Recuperado' && res.atenci_n != 'Fallecido'
    && res.atenci_n != 'N/A'){
  this.contIndigenaInfectado++;
}

if (res.pertenencia_etnica == 'Indígena' && res.atenci_n == 'Fallecido'){
  this.contIndigenaFallecido++;
}

if (res.pertenencia_etnica == 'Indígena' && res.atenci_n == 'N/A'){
  this.contIndigenaSinInformacion++;
}

//Rom

if (res.pertenencia_etnica == 'Rom' ){
  this.contRom++;
}

if (res.pertenencia_etnica == 'Rom' && res.atenci_n == 'Recuperado'){
  this.contRomRecuperado++;
}

if (res.pertenencia_etnica == 'Rom' && res.atenci_n != 'Recuperado' && res.atenci_n != 'Fallecido'
    && res.atenci_n != 'N/A'){
  this.contRomInfectado++;
}

if (res.pertenencia_etnica == 'Rom' && res.atenci_n == 'Fallecido'){
  this.contRomFallecido++;
}

if (res.pertenencia_etnica == 'Rom' && res.atenci_n == 'N/A'){
  this.contRomSinInformacion++;
}

//Sin informacion

if (res.pertenencia_etnica == null){
  this.contVacias++;
}

if (res.pertenencia_etnica == null && res.atenci_n == 'Recuperado'){
  this.contVaciasRecuperado++;
}

if (res.pertenencia_etnica == null && res.atenci_n != 'Recuperado' && res.atenci_n != 'Fallecido'
    && res.atenci_n != 'N/A'){
  this.contVaciasInfectado++;
}

if (res.pertenencia_etnica == null && res.atenci_n == 'Fallecido'){
  this.contVaciasFallecido++;
}

if (res.pertenencia_etnica == null && res.atenci_n == 'N/A'){
  this.contVaciasSinInformacion++;
}

}
);

//inicio graficas etnia

this.chartEtnia = new Chart('etnia', {
  type: 'bar',
  data:{
    labels: ['Negro' + ' (' + this.contNegro + ')',
             'Otro' + ' (' + this.contOtro + ')',
             'Indigena' + ' (' + this.contIndigena + ')',
             'Rom' + ' (' + this.contRom + ')',
              'Sin informacion' + ' (' + this.contVacias + ')'],
             
    datasets: [{
      label: 'Recuperados',
      data: [this.contNegroRecuperado, this.contOtroRecuperado, this.contIndigenaRecuperado, this.contRomRecuperado,
             this.contVaciasRecuperado],

      backgroundColor: 'rgb(1, 224, 228)',

      borderColor: 'rgb(1, 224, 228)',

      borderWidth: 2,

      barPercentage: 0.7
      
    },{

      label: 'Infectados actuales',
      data: [this.contNegroInfectado, this.contOtroInfectado, this.contIndigenaInfectado, this.contRomInfectado,     this.contVaciasInfectado],

      backgroundColor: 'rgb(232, 236, 3)',

      borderColor: 'rgb(232, 236, 3)',

      borderWidth: 2,

      barPercentage: 0.7

    },{

      label: 'Fallecidos',
      data: [this.contNegroFallecido, this.contOtroFallecido, this.contIndigenaFallecido, this.contRomFallecido,
             this.contVaciasFallecido],

      backgroundColor:
        'rgb(34, 0, 66)',

      borderColor: 'rgb(34, 0, 66)',

      borderWidth: 2,

      barPercentage: 0.7

    
  },{

    label: 'No aplica',
    data: [this.contNegroSinInformacion, this.contOtroSinInformacion, this.contIndigenaSinInformacion, 
           this.contRomSinInformacion, this.contVaciasSinInformacion],

    backgroundColor:
      'rgb(255, 255, 255)',

    borderColor: 'rgb(255, 255, 255)',

    borderWidth: 2,

    barPercentage: 0.7

  }]
},
  options: {

     animation:{
      duration: 2000
    },
    hover: {
      animationDuration: 2000
    },

      scales: {
        
          xAxes: [{
              stacked: true
                    
          }],
          yAxes: [{
              stacked: true
          }]
      }
  }
});

}
)

//fin graficas etnia

//Parseo string fechas a date y condicionales grafica infectados por mes

this._graficos.getData(`?$limit=${this.limiteDatos}&$select=fecha_de_notificaci_n,estado
&$where=departamento = '${this.depto}'`).subscribe((res: Paciente[]) => {

res.forEach(res => {
  
  let date = new Date(res.fecha_de_notificaci_n);
  let fecha =this.datepipe.transform(date, 'MMMM');
  

  //Marzo

  if (fecha == 'March' && res.estado == 'Leve' ){
    this.contMarzoLeve++;
}

  if (fecha == 'March' && res.estado == 'Moderado' ){
  this.contMarzoModerado++;
}
  if (fecha == 'March' && res.estado == 'Grave' ){
  this.contMarzoGrave++;
}

  if (fecha == 'March' && res.estado == 'Asintomático' ){
  this.contMarzoAsintomatico++;
}

  if (fecha == 'March' && res.estado == 'Fallecido' ){
  this.contMarzoFallecido++;
}

//Abril 

  if (fecha == 'April' && res.estado == 'Leve' ){
  this.contAbrilLeve++;
}

  if (fecha == 'April' && res.estado == 'Moderado' ){
  this.contAbrilModerado++;
}
  if (fecha == 'April' && res.estado == 'Grave' ){
  this.contAbrilGrave++;
}

  if (fecha == 'April' && res.estado == 'Asintomático' ){
  this.contAbrilAsintomatico++;
}

  if (fecha == 'April' && res.estado == 'Fallecido' ){
  this.contAbrilFallecido++;
}

  //Mayo

  if (fecha == 'May' && res.estado == 'Leve'){
  this.contMayoLeve++;
}

  if (fecha == 'May' && res.estado == 'Moderado' ){
  this.contMayoModerado++;
}
  if (fecha == 'May' && res.estado == 'Grave' ){
  this.contMayoGrave++;
}

  if (fecha == 'May' && res.estado == 'Asintomático' ){
  this.contMayoAsintomatico++;
}

  if (fecha == 'May' && res.estado == 'Fallecido' ){
  this.contMayoFallecido++;
}

  //Junio

  if (fecha == 'June' && res.estado == 'Leve'){
  this.contJunioLeve++;
}

  if (fecha == 'June' && res.estado == 'Moderado' ){
  this.contJunioModerado++;
}
  if (fecha == 'June' && res.estado == 'Grave' ){
  this.contJunioGrave++;
}

  if (fecha == 'June' && res.estado == 'Asintomático' ){
  this.contJunioAsintomatico++;
}

  if (fecha == 'June' && res.estado == 'Fallecido' ){
  this.contJunioFallecido++;
}

  //Julio

  if (fecha == 'July' && res.estado == 'Leve'){
  this.contJulioLeve++;
}

  if (fecha == 'July' && res.estado == 'Moderado' ){
  this.contJulioModerado++;
}
  if (fecha == 'July' && res.estado == 'Grave' ){
  this.contJulioGrave++;
}

  if (fecha == 'July' && res.estado == 'Asintomático' ){
  this.contJulioAsintomatico++;
}

  if (fecha == 'July' && res.estado == 'Fallecido' ){
  this.contJulioFallecido++;
}

  //Agosto

  if (fecha == 'August' && res.estado == 'Leve'){
  this.contAgostoLeve++;
}

  if (fecha == 'August' && res.estado == 'Moderado' ){
  this.contAgostoModerado++;
}
  if (fecha == 'August' && res.estado == 'Grave' ){
  this.contAgostoGrave++;
}

  if (fecha == 'August' && res.estado == 'Asintomático' ){
  this.contAgostoAsintomatico++;
}

  if (fecha == 'August' && res.estado == 'Fallecido' ){
  this.contAgostoFallecido++;
}

  //Septiembre

  if (fecha == 'September' && res.estado == 'Leve'){
  this.contSeptiembreLeve++;
}

  if (fecha == 'September' && res.estado == 'Moderado' ){
  this.contSeptiembreModerado++;
}
  if (fecha == 'September' && res.estado == 'Grave' ){
  this.contSeptiembreGrave++;
}

  if (fecha == 'September' && res.estado == 'Asintomático' ){
  this.contSeptiembreAsintomatico++;
}

  if (fecha == 'September' && res.estado == 'Fallecido' ){
  this.contSeptiembreFallecido++;
}

  //Octubre

  if (fecha == 'October' && res.estado == 'Leve'){
  this.contOctubreLeve++;
}

  if (fecha == 'October' && res.estado == 'Moderado' ){
  this.contOctubreModerado++;
}
  if (fecha == 'October' && res.estado == 'Grave' ){
  this.contOctubreGrave++;
}

  if (fecha == 'October' && res.estado == 'Asintomático' ){
  this.contOctubreAsintomatico++;
}

  if (fecha == 'October' && res.estado == 'Fallecido' ){
  this.contOctubreFallecido++;
}

  //Noviembre

  if (fecha == 'November' && res.estado == 'Leve'){
  this.contNoviembreLeve++;
}

  if (fecha == 'November' && res.estado == 'Moderado' ){
  this.contNoviembreModerado++;
}
  if (fecha == 'November' && res.estado == 'Grave' ){
  this.contNoviembreGrave++;
}

  if (fecha == 'November' && res.estado == 'Asintomático' ){
  this.contNoviembreAsintomatico++;
}

  if (fecha == 'November' && res.estado == 'Fallecido' ){
  this.contNoviembreFallecido++;
}

  //Diciembre

  if (fecha == 'December' && res.estado == 'Leve'){
  this.contDiciembreLeve++;
}

  if (fecha == 'December' && res.estado == 'Moderado' ){
  this.contDiciembreModerado++;
}
  if (fecha == 'December' && res.estado == 'Grave' ){
  this.contDiciembreGrave++;
}

  if (fecha == 'December' && res.estado == 'Asintomático' ){
  this.contDiciembreAsintomatico++;
}

  if (fecha == 'December' && res.estado == 'Fallecido' ){
  this.contDiciembreFallecido++;
}

}
);

//Inicio Graficas mes

this.chartInfectadosMeses = new Chart('contagiados_mes', {
  type: 'horizontalBar',
  data:{
    labels: ['Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
             'Octubre', 'Noviembre', 'Diciembre'],
             
    datasets: [{
        label: 'Asintomatico',
        data: [this.contMarzoAsintomatico, this.contAbrilAsintomatico, 
               this.contMayoAsintomatico, this.contJunioAsintomatico, 
               this.contJulioAsintomatico, this.contAgostoAsintomatico, 
               this.contSeptiembreAsintomatico, this.contOctubreAsintomatico, 
               this.contNoviembreAsintomatico, 
               this.contDiciembreAsintomatico],
    
        backgroundColor: 'rgb(1, 224, 228)',
    
        borderColor: 'rgb(1, 224, 228)',
    
        borderWidth: 2,
    
        barPercentage: 0.9
        
      },
      
      {
      label: 'Leve',
      data: [this.contMarzoLeve, this.contAbrilLeve, this.contMayoLeve, 
             this.contJunioLeve, this.contJulioLeve, 
             this.contAgostoLeve, this.contSeptiembreLeve, this.contOctubreLeve, 
             this.contNoviembreLeve, this.contDiciembreLeve],

      backgroundColor: 'rgb(232, 236, 3)',

      borderColor: 'rgb(232, 236, 3)',

      borderWidth: 2,

      barPercentage: 0.9
      
    },{
    
    label: 'Moderado',
    data: [this.contMarzoModerado, this.contAbrilModerado, this.contMayoModerado, 
           this.contJunioModerado, this.contJulioModerado, this.contAgostoModerado, this.contSeptiembreModerado, this.contOctubreModerado, 
           this.contNoviembreModerado, this.contDiciembreModerado],

    backgroundColor: 'rgb(214, 107, 0)',

    borderColor: 'rgb(214, 107, 0)',

    borderWidth: 2,

    barPercentage: 0.9
    
  },{
    
    label: 'Grave',
    data: [this.contMarzoGrave, this.contAbrilGrave, this.contMayoGrave, 
           this.contJunioGrave, this.contJulioGrave, this.contAgostoGrave, 
           this.contSeptiembreGrave, this.contOctubreGrave, 
           this.contNoviembreGrave, this.contDiciembreGrave],

    backgroundColor: 'rgb(205, 5, 3)',

    borderColor: 'rgb(205, 5, 3)',

    borderWidth: 2,

    barPercentage: 0.9
    
  },{
    
    label: 'Fallecidos',
    data: [this.contMarzoFallecido, this.contAbrilFallecido, this.contMayoFallecido, this.contJunioFallecido, 
          this.contJulioFallecido, this.contAgostoFallecido, this.contSeptiembreFallecido, this.contOctubreFallecido, this.contNoviembreFallecido, this.contDiciembreFallecido],

    backgroundColor: 'rgb(34, 0, 66)',

    borderColor: 'rgb(34, 0, 66)',

    borderWidth: 2,

    barPercentage: 0.9
    
  }]
  },

  options: {

    legend:{
      labels:{
        fontColor: 'white'
      }
    },

     animation:{
      duration: 2000
    },
    hover: {
      animationDuration: 2000
    },

    scales: {
        
      xAxes: [{
        stacked: true,
        beginAtZero: true
                
      }],
      yAxes: [{
        stacked: true,
        beginAtZero: true
      }]
  }

  }
});

}
)

//fin grafica infecta infectados mes


//condicional sexo grupo etario

this._graficos.getData(`?$limit=${this.limiteDatos}&$select=edad,sexo
&$where=departamento = '${this.depto}'`).subscribe((res: Paciente[]) => {

res.forEach(res => {

  if (parseInt(res.edad) <5 && (res.sexo == 'M' || res.sexo == 'm')){
    this.cont1M++;

}else   if (parseInt(res.edad) <5 && (res.sexo == 'F' || res.sexo == 'f')){
  this.cont1F++;

}

if (parseInt(res.edad) >=5 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 9){
  this.cont2M++;

}else   if (parseInt(res.edad) >=5 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 9 ){
this.cont2F++;

}
if (parseInt(res.edad) >=10 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 14){
  this.cont3M++;

}else   if (parseInt(res.edad) >=10 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 14 ){
this.cont3F++;

}

if (parseInt(res.edad) >=15 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 19){
  this.cont4M++;

}else   if (parseInt(res.edad) >=15 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 19 ){
this.cont4F++;

}

if (parseInt(res.edad) >=20 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 24){
  this.cont5M++;

}else   if (parseInt(res.edad) >=20 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 24 ){
this.cont5F++;

}

if (parseInt(res.edad) >=25 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 29){
  this.cont6M++;

}else   if (parseInt(res.edad) >=25 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 29 ){
this.cont6F++;

}

if (parseInt(res.edad) >=30 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 34){
  this.cont7M++;

}else   if (parseInt(res.edad) >=30 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 34 ){
this.cont7F++;

}

if (parseInt(res.edad) >=35 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 39){
  this.cont8M++;

}else   if (parseInt(res.edad) >=35 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 39 ){
this.cont8F++;

}

if (parseInt(res.edad) >=40 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 44){
  this.cont9M++;

}else   if (parseInt(res.edad) >=40 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 44 ){
this.cont9F++;

}

if (parseInt(res.edad) >=45 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 49){
  this.cont10M++

}else   if (parseInt(res.edad) >=45 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 49 ){
this.cont10F++;

}

if (parseInt(res.edad) >=50 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 54){
  this.cont11M++;

}else   if (parseInt(res.edad) >=50 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 54 ){
this.cont11F++;

}

if (parseInt(res.edad) >=55 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 59){
  this.cont12M++;

}else   if (parseInt(res.edad) >=55 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 59 ){
this.cont12F++;

}

if (parseInt(res.edad) >=60 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 64){
  this.cont13M++;

}else   if (parseInt(res.edad) >=60 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 64 ){
this.cont13F++;

}

if (parseInt(res.edad) >=65 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 69){
  this.cont14M++;

}else   if (parseInt(res.edad) >=65 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 69 ){
this.cont14F++;

}

if (parseInt(res.edad) >=70 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 74){
  this.cont15M++;

}else   if (parseInt(res.edad) >=70 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 74 ){
this.cont15F++;

}

if (parseInt(res.edad) >=75 && (res.sexo == 'M' || res.sexo == 'm') && parseInt(res.edad) <= 79){
  this.cont16M++;

}else   if (parseInt(res.edad) >=75 && (res.sexo == 'F' || res.sexo == 'f') && parseInt(res.edad) <= 79 ){
this.cont16F++;

}

if (parseInt(res.edad) >=80 && (res.sexo == 'M' || res.sexo == 'm')){
  this.cont17M++;

}else   if (parseInt(res.edad) >=80 && (res.sexo == 'F' || res.sexo == 'f')){
this.cont17F++;
}

}
);


this.charGrupoEtario = new Chart('edades', {

  type: 'horizontalBar',
  data:{
    labels: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', 
             '55-59', '60-64', '65-69', '70-74', '75-79', '+80'],
    datasets: [{
      label: 'Masculino',
      data: [this.cont1M, this.cont2M, this.cont3M, this.cont4M, this.cont5M, this.cont6M, this.cont7M,
             this.cont8M, this.cont9M, this.cont10M, this.cont11M, this.cont12M, this.cont13M, this.cont14M, 
             this.cont15M, this.cont16M, this.cont17M],

      backgroundColor:'rgb(60, 198, 42)',

      borderColor: 'rgb(0, 0, 0)',

      borderWidth: 1.2,

      barPercentage: 1.5
    },{
      label: 'Femenino',
      data: [this.cont1F, this.cont2F, this.cont3F, this.cont4F, this.cont5F, this.cont6F, this.cont7F,
             this.cont8F, this.cont9F, this.cont10F, this.cont11F, this.cont12F, this.cont13F, this.cont14F, 
             this.cont15F, this.cont16F, this.cont17F],

      backgroundColor:'rgb(1, 224, 228)',

      borderColor: 'rgb(0, 0, 0)',

      borderWidth: 1,

      barPercentage: 1.5
    }]
  },

  options: {

     animation:{
      duration: 2000
    },
    hover: {
      animationDuration: 2000
    },
    scales: {
        
      xAxes: [{
        stacked: true,
        beginAtZero: true
                
      }],
      yAxes: [{
        stacked: true,
        beginAtZero: true
      }]
  }

  }
}
)

}
)

//fin graficas sexo grupo etario

//condicional estado grupo etario

this._graficos.getData(`?$limit=${this.limiteDatos}&$select=edad,estado
&$where=departamento = '${this.depto}'`).subscribe((res: Paciente[]) => {


res.forEach(res => {

  if (parseInt(res.edad) <5 && res.estado == 'Leve'){
    this.cont1Leve++;
}else   if (parseInt(res.edad) <5 && res.estado == 'Moderado'){
  this.cont1Moderado++;
}else if (parseInt(res.edad) <5 && res.estado == 'Grave'){
  this.cont1Grave++;
}else if (parseInt(res.edad) <5 && res.estado == 'Asintomático'){
  this.cont1Asintomatico++;
}else if (parseInt(res.edad) <5 && res.estado == 'Fallecido'){
  this.cont1Fallecido++;
}
if (parseInt(res.edad) >=5 && res.estado == 'Leve' && parseInt(res.edad) <= 9){
  this.cont2Leve++;
}else   if (parseInt(res.edad) >=5 && res.estado == 'Moderado' && parseInt(res.edad) <= 9 ){
this.cont2Moderado++;
}else if (parseInt(res.edad) >=5 && res.estado == 'Grave' && parseInt(res.edad) <= 9){
  this.cont2Grave++;
}else if (parseInt(res.edad) >=5 && res.estado == 'Asintomático' && parseInt(res.edad) <= 9){
  this.cont2Asintomatico++;
}else if (parseInt(res.edad) >=5 && res.estado == 'Fallecido' && parseInt(res.edad) <= 9){
  this.cont2Fallecido++;
}
if (parseInt(res.edad) >=10 && res.estado == 'Leve' && parseInt(res.edad) <= 14){
  this.cont3Leve++;
}else   if (parseInt(res.edad) >=10 && res.estado == 'Moderado' && parseInt(res.edad) <= 14 ){
this.cont3Moderado++;
}else if (parseInt(res.edad) >=10 && res.estado == 'Grave' && parseInt(res.edad) <= 14){
  this.cont3Grave++;
}else if (parseInt(res.edad) >=10 && res.estado == 'Asintomático' && parseInt(res.edad) <= 14){
  this.cont3Asintomatico++;
}else if (parseInt(res.edad) >=10 && res.estado == 'Fallecido' && parseInt(res.edad) <= 14){
  this.cont3Fallecido++;
}
if (parseInt(res.edad) >=15 && res.estado == 'Leve' && parseInt(res.edad) <= 19){
  this.cont4Leve++;
}else   if (parseInt(res.edad) >=15 && res.estado == 'Moderado' && parseInt(res.edad) <= 19 ){
this.cont4Moderado++;
}else if (parseInt(res.edad) >=15 && res.estado == 'Grave' && parseInt(res.edad) <= 19){
  this.cont4Grave++;
}else if (parseInt(res.edad) >=15 && res.estado == 'Asintomático' && parseInt(res.edad) <= 19){
  this.cont4Asintomatico++;
}else if (parseInt(res.edad) >=15 && res.estado == 'Fallecido' && parseInt(res.edad) <= 19){
  this.cont4Fallecido++;
}
if (parseInt(res.edad) >=20 && res.estado == 'Leve' && parseInt(res.edad) <= 24){
  this.cont5Leve++;
}else   if (parseInt(res.edad) >=20 && res.estado == 'Moderado' && parseInt(res.edad) <= 24 ){
this.cont5Moderado++;
}else if (parseInt(res.edad) >=20 && res.estado == 'Grave' && parseInt(res.edad) <= 24){
  this.cont5Grave++;
}else if (parseInt(res.edad) >=20 && res.estado == 'Asintomático' && parseInt(res.edad) <= 24){
  this.cont5Asintomatico++;
}else if (parseInt(res.edad) >=20 && res.estado == 'Fallecido' && parseInt(res.edad) <= 24){
  this.cont5Fallecido++;
}
if (parseInt(res.edad) >=25 && res.estado == 'Leve' && parseInt(res.edad) <= 29){
  this.cont6Leve++;
}else   if (parseInt(res.edad) >=25 && res.estado == 'Moderado' && parseInt(res.edad) <= 29 ){
this.cont6Moderado++;
}else if (parseInt(res.edad) >=25 && res.estado == 'Grave' && parseInt(res.edad) <= 29){
  this.cont6Grave++;
}else if (parseInt(res.edad) >=25 && res.estado == 'Asintomático' && parseInt(res.edad) <= 29){
  this.cont6Asintomatico++;
}else if (parseInt(res.edad) >=25 && res.estado == 'Fallecido' && parseInt(res.edad) <= 29){
  this.cont6Fallecido++;
}
if (parseInt(res.edad) >=30 && res.estado == 'Leve' && parseInt(res.edad) <= 34){
  this.cont7Leve++;
}else   if (parseInt(res.edad) >=30 && res.estado == 'Moderado' && parseInt(res.edad) <= 34 ){
this.cont7Moderado++;
}else if (parseInt(res.edad) >=30 && res.estado == 'Grave' && parseInt(res.edad) <= 34){
  this.cont7Grave++;
}else if (parseInt(res.edad) >=30 && res.estado == 'Asintomático' && parseInt(res.edad) <= 34){
  this.cont7Asintomatico++;
}else if (parseInt(res.edad) >=30 && res.estado == 'Fallecido' && parseInt(res.edad) <= 34){
  this.cont7Fallecido++;
}
if (parseInt(res.edad) >=35 && res.estado == 'Leve' && parseInt(res.edad) <= 39){
  this.cont8Leve++;
}else   if (parseInt(res.edad) >=35 && res.estado == 'Moderado' && parseInt(res.edad) <= 39 ){
this.cont8Moderado++;
}else if (parseInt(res.edad) >=35 && res.estado == 'Grave' && parseInt(res.edad) <= 39){
  this.cont8Grave++;
}else if (parseInt(res.edad) >=35 && res.estado == 'Asintomático' && parseInt(res.edad) <= 39){
  this.cont8Asintomatico++;
}else if (parseInt(res.edad) >=35 && res.estado == 'Fallecido' && parseInt(res.edad) <= 39){
  this.cont8Fallecido++;
}
if (parseInt(res.edad) >=40 && res.estado == 'Leve' && parseInt(res.edad) <= 44){
  this.cont9Leve++;
}else   if (parseInt(res.edad) >=40 && res.estado == 'Moderado' && parseInt(res.edad) <= 44 ){
this.cont9Moderado++;
}else if (parseInt(res.edad) >=40 && res.estado == 'Grave' && parseInt(res.edad) <= 44){
  this.cont9Grave++;
}else if (parseInt(res.edad) >=40 && res.estado == 'Asintomático' && parseInt(res.edad) <= 44){
  this.cont9Asintomatico++;
}else if (parseInt(res.edad) >=40 && res.estado == 'Fallecido' && parseInt(res.edad) <= 44){
  this.cont9Fallecido++;
}
if (parseInt(res.edad) >=45 && res.estado == 'Leve' && parseInt(res.edad) <= 49){
  this.cont10Leve++;
}else   if (parseInt(res.edad) >=45 && res.estado == 'Moderado' && parseInt(res.edad) <= 49 ){
this.cont10Moderado++;
}else if (parseInt(res.edad) >=45 && res.estado == 'Grave' && parseInt(res.edad) <= 49){
  this.cont10Grave++;
}else if (parseInt(res.edad) >=45 && res.estado == 'Asintomático' && parseInt(res.edad) <= 49){
  this.cont10Asintomatico++;
}else if (parseInt(res.edad) >=45 && res.estado == 'Fallecido' && parseInt(res.edad) <= 49){
  this.cont10Fallecido++;
}
if (parseInt(res.edad) >=50 && res.estado == 'Leve' && parseInt(res.edad) <= 54){
  this.cont11Leve++;
}else   if (parseInt(res.edad) >=50 && res.estado == 'Moderado' && parseInt(res.edad) <= 54 ){
this.cont11Moderado++;
}else if (parseInt(res.edad) >=50 && res.estado == 'Grave' && parseInt(res.edad) <= 54){
  this.cont11Grave++;
}else if (parseInt(res.edad) >=50 && res.estado == 'Asintomático' && parseInt(res.edad) <= 54){
  this.cont11Asintomatico++;
}else if (parseInt(res.edad) >=50 && res.estado == 'Fallecido' && parseInt(res.edad) <= 54){
  this.cont11Fallecido++;
}
if (parseInt(res.edad) >=55 && res.estado == 'Leve' && parseInt(res.edad) <= 59){
  this.cont12Leve++;
}else   if (parseInt(res.edad) >=55 && res.estado == 'Moderado' && parseInt(res.edad) <= 59 ){
this.cont12Moderado++;
}else if (parseInt(res.edad) >=55 && res.estado == 'Grave' && parseInt(res.edad) <= 59){
  this.cont12Grave++;
}else if (parseInt(res.edad) >=55 && res.estado == 'Asintomático' && parseInt(res.edad) <= 59){
  this.cont12Asintomatico++;
}else if (parseInt(res.edad) >=55 && res.estado == 'Fallecido' && parseInt(res.edad) <= 59){
  this.cont12Fallecido++;
}
if (parseInt(res.edad) >=60 && res.estado == 'Leve' && parseInt(res.edad) <= 64){
  this.cont13Leve++;
}else   if (parseInt(res.edad) >=60 &&res.estado == 'Moderado' && parseInt(res.edad) <= 64 ){
this.cont13Moderado++;
}else if (parseInt(res.edad) >=60 && res.estado == 'Grave' && parseInt(res.edad) <= 64){
  this.cont13Grave++;
}else if (parseInt(res.edad) >=60 && res.estado == 'Asintomático' && parseInt(res.edad) <= 64){
  this.cont13Asintomatico++;
}else if (parseInt(res.edad) >=60 && res.estado == 'Fallecido' && parseInt(res.edad) <= 64){
  this.cont13Fallecido++;
}
if (parseInt(res.edad) >=65 && res.estado == 'Leve' && parseInt(res.edad) <= 69){
  this.cont14Leve++;
}else   if (parseInt(res.edad) >=65 && res.estado == 'Moderado' && parseInt(res.edad) <= 69 ){
this.cont14Moderado++;
}else if (parseInt(res.edad) >=65 && res.estado == 'Grave' && parseInt(res.edad) <= 69){
  this.cont14Grave++;
}else if (parseInt(res.edad) >=65 && res.estado == 'Asintomático' && parseInt(res.edad) <= 69){
  this.cont14Asintomatico++;
}else if (parseInt(res.edad) >=65 && res.estado == 'Fallecido' && parseInt(res.edad) <= 69){
  this.cont14Fallecido++;
}
if (parseInt(res.edad) >=70 && res.estado == 'Leve' && parseInt(res.edad) <= 74){
  this.cont15Leve++;
}else   if (parseInt(res.edad) >=70 && res.estado == 'Moderado' && parseInt(res.edad) <= 74 ){
this.cont15Moderado++;
}else if (parseInt(res.edad) >=70 && res.estado == 'Grave' && parseInt(res.edad) <= 74){
  this.cont15Grave++;
}else if (parseInt(res.edad) >=70 && res.estado == 'Asintomático' && parseInt(res.edad) <= 74){
  this.cont15Asintomatico++;
}else if (parseInt(res.edad) >=70 && res.estado == 'Fallecido' && parseInt(res.edad) <= 74){
  this.cont15Fallecido++;
}
if (parseInt(res.edad) >=75 && res.estado == 'Leve' && parseInt(res.edad) <= 79){
  this.cont16Leve++;
}else   if (parseInt(res.edad) >=75 && res.estado == 'Moderado' && parseInt(res.edad) <= 79 ){
this.cont16Moderado++;
}else if (parseInt(res.edad) >=75 && res.estado == 'Grave' && parseInt(res.edad) <= 79){
  this.cont16Grave++;
}else if (parseInt(res.edad) >=75 && res.estado == 'Asintomático' && parseInt(res.edad) <= 79){
  this.cont16Asintomatico++;
}else if (parseInt(res.edad) >=75 && res.estado == 'Fallecido' && parseInt(res.edad) <= 79){
  this.cont16Fallecido++;
}
if (parseInt(res.edad) >=80 && res.estado == 'Leve'){
  this.cont17Leve++;
}else   if (parseInt(res.edad) >=80 && res.estado== 'Moderado' ){
this.cont17Moderado++;
}else if (parseInt(res.edad) >=80 && res.estado == 'Grave'){
  this.cont17Grave++;
}else if (parseInt(res.edad) >=80 && res.estado == 'Asintomático'){
  this.cont17Asintomatico++;
}else if (parseInt(res.edad) >=80 && res.estado == 'Fallecido'){
  this.cont17Fallecido++;
}

}
);


this.chartEstadoGrupoEtario = new Chart('EstadoEdades', {

  type: 'bar',
  data:{
    labels: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', 
             '55-59', '60-64', '65-69', '70-74', '75-79', '+80'],
    datasets: [
      {
        label: 'Asintomatico',
        data: [this.cont1Asintomatico, this.cont2Asintomatico, this.cont3Asintomatico, this.cont4Asintomatico, this.cont5Asintomatico,
               this.cont6Asintomatico, this.cont7Asintomatico, this.cont8Asintomatico, this.cont9Asintomatico, this.cont10Asintomatico, 
               this.cont11Asintomatico, this.cont12Asintomatico, this.cont13Asintomatico, this.cont14Asintomatico, 
               this.cont15Asintomatico, this.cont16Asintomatico, this.cont17Asintomatico],
  
        backgroundColor:'rgb(1, 224, 228)',
  
        borderColor: 'rgb(232, 236, 3)',
  
        borderWidth: 1,
  
        barPercentage: 1
      },{
      label: 'Leve',
      data: [this.cont1Leve, this.cont2Leve, this.cont3Leve, this.cont4Leve, this.cont5Leve, this.cont6Leve, 
        this.cont7Leve, this.cont8Leve, this.cont9Leve, this.cont10Leve, this.cont11Leve, this.cont12Leve, 
        this.cont13Leve, this.cont14Leve, this.cont15Leve, this.cont16Leve, this.cont17Leve],

      backgroundColor:'rgb(232, 236, 3)',

      borderColor: 'rgb(232, 236, 3)',

      borderWidth: 1,

      barPercentage: 1

    },{
      label: 'Moderado',
      data: [this.cont1Moderado, this.cont2Moderado, this.cont3Moderado, this.cont4Moderado, this.cont5Moderado,     this.cont6Moderado, this.cont7Moderado, this.cont8Moderado, this.cont9Moderado, this.cont10Moderado, 
             this.cont11Moderado, this.cont12Moderado, this.cont13Moderado, this.cont14Moderado, 
             this.cont15Moderado, this.cont16Moderado, this.cont17Moderado],

      backgroundColor:'rgb(214, 107, 0)',

      borderColor: 'rgb(214, 107, 0)',

      borderWidth: 1,

      barPercentage: 1
    },{
      label: 'Grave',
      data: [this.cont1Grave, this.cont2Grave, this.cont3Grave, this.cont4Grave, this.cont5Grave,     this.cont6Grave, this.cont7Grave, this.cont8Grave, this.cont9Grave, this.cont10Grave, 
             this.cont1Grave, this.cont12Grave, this.cont13Grave, this.cont14Grave, 
             this.cont15Grave, this.cont16Grave, this.cont17Grave],

      backgroundColor:'rgb(205, 5, 3)',

      borderColor: 'rgb(205, 5, 3)',

      borderWidth: 1,

      barPercentage: 1
    },{
      label: 'Fallecidos',
      data: [this.cont1Fallecido, this.cont2Fallecido, this.cont3Fallecido, this.cont4Fallecido, this.cont5Fallecido,
             this.cont6Fallecido, this.cont7Fallecido, this.cont8Fallecido, this.cont9Fallecido, this.cont10Fallecido, 
             this.cont11Fallecido, this.cont12Fallecido, this.cont13Fallecido, this.cont14Fallecido, 
             this.cont15Fallecido, this.cont16Fallecido, this.cont17Fallecido],

      backgroundColor:'rgb(34, 0, 66)',

      borderColor: 'rgb(34, 0, 66)',

      borderWidth: 1,

      barPercentage: 1
    }]
  },

  options: {

     animation:{
      duration: 2000
    },
    hover: {
      animationDuration: 2000
    },
    scales: {
        
      xAxes: [{
        stacked: true,
        beginAtZero: true
                
      }],
      yAxes: [{
        stacked: true,
        beginAtZero: true
      }]
  }

  }
}
)

}
)

  //finGraficos  


  }

  ngOnInit(): void {
  }

}
