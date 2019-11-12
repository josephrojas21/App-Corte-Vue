/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { HotTable } from '@handsontable/vue';
import OrdenCorte from '../../services/infoTables/ordenCorte'

//const objectData = new OrdenCorte();

export default {
    components: {
        HotTable
    },
    methods: {

        getData(){
            //this.hotSettings.columns.splice(13, 0, { data: 'Capa Final' }, { data: '# Capas' }, { data: 'Subtotal' });
            this.hotSettings.nestedHeaders[2].splice(13, 0, 'Capa Final', '# Capas', 'Subtotal');
            this.hotSettings.nestedHeaders[0].splice(11, 0, { label: 'Trazo 1', colspan: 3 });
            this.hotSettings.nestedHeaders[1].splice(11, 0, { label: 'Largo', colspan: 3 });
        },
        getValues(){
            console.log(this.hotSettings.data);
            
           
        },
        async getPost(){
            try {
                const res = await OrdenCorte.getData();
                this.hotSettings.nestedHeaders = res.headers;
                this.hotSettings.data= res.data;
                //this.hotSettings.columns = res.columns;
                this.charge = true
                //this.hotSettings.data[1][ Object.keys( this.hotSettings.data[1]).pop()] = '=l2*30'
                console.log();
                
            }
            catch (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            }
        }
    },
    created() {
        this.getPost()
    },
    data: function () {
        return {
            hotSettings: {

                data: [{}],
                nestedHeaders: [{}],
                //columns: [{}],
                width: '100%',
                height: 350,
                formulas: true,
                fixedColumnsLeft: 10,
                alert: console.log("ewe"),
                
            },
            columnSummary: [
                {
                    destinationRow: 14,
                    destinationColumn: 6,
                    type: 'sum',
                    forceNumeric: true
                }
                
            ],
            alert: console.log("ewe"),
            charge: false
        }

    }
}


