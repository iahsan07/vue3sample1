<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg inline-block">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Enter Value A</div>
            <p class="text-gray-700 text-base">
                <input v-model="input1" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="vala" type="text" placeholder="Enter A">
            </p>
        </div>
    </div>


    <div class="max-w-sm rounded overflow-hidden shadow-lg inline-block">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Enter Value B</div>
            <p class="text-gray-700 text-base">
                <input v-model="input2" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="valb" type="text" placeholder="Enter B">
            </p>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center">
        <div class="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-center items-center">
            <div class="px-6 py-4">
                <button @click.prevent="sum" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Sum
                </button>
            </div>
        </div>
    </div>

    <div class="h-screen flex flex-col items-center justify-center">
        <div class="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-center items-center">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Result</div>
                <p class="text-gray-700 text-base">
                    <input  :value="getSum()" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="result" disabled type="text" placeholder="Result">
                </p>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: 'Calculator',
        data(){
            return {
                input1:'0',
                input2:'0',
            }
        },

        methods: {
            sum(){

                let a = this.input1;
                let b = this.input2;
                this.$store.commit('sumResult',{
                    a,
                    b
                })
                //console.log(this.$store.state.result);
            },

            getSum(){
                return this.$store.state.result;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
