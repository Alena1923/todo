//локальная регистрация объекта
const todoItime = {
    //входные параметры для компонентов
    props: ["todo"],
    emits: ["complete-todo"],
    methods: {
        makeComplete() {
            this.$emit("complete-todo");


        }
    },


    //шаблон компонента
    template:
        `
<div> 
{{todo.title }}
<input type="checkbox" :checked= "todo.completed" v-on:click="makeComplete">
</div>
`,
};
const app = Vue.createApp({
    data() {
        return {
            todolist: [
                {
                    "title": "задача1",
                    "completed": false,
                    "noActive": false
                },
                {
                    "title": "так же задача2",
                    "completed": false,
                    "noActive": false
                },
            ],
        }
    },
    components: {
        "todo-item": todoItime,
    },
    methods: {
        makeDone(index) {
            console.log("before", this.todolist[index]);
            this.todolist[index].completed = !this.todolist[index].completed;
            console.log("after", this.todolist[index]);
        },
        add() {
            if (!this.itemForAdd.trim()) {
                return;
            }
            this.todolist.push(
                {
                    "title": this.itemForAdd,
                    "completed": false,
                    "noActive": false,
                    "id": this.itemForAdd.length + 1
                },
            );
            console.log(this.todolist);
        },
        del(index) {
            this.todolist.splice(index, 1);
            console.log("удаление");
        },
        filter1() {
            this.todolist.forEach(element => {
                if (element.completed == false) {
                    element.noActive = true
                }
                else {
                    element.noActive = false
                }
            });
        },
        filter2() {
            this.todolist.forEach(element => {
                if (element.completed == true) {
                    element.noActive = true
                }
                else {
                    element.noActive = false
                }
            });

        },
        filter3() {
            this.todolist.forEach(element => {
                element.noActive = false;
            });
        },
        sort1() {
            this.todolist.sort((a, b) => a.title > b.title ? 1 : -1);
        },
        sort2() {
            this.todolist.sort((a, b) => a.id < b.id ? 1 : -1);
        },
        sort3() {
            this.todolist.sort((a, b) => a.id > b.id ? 1 : -1);
        },

    },


    mounted() {
        /*
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => (this.todolist = json))*/
    }
});




app.mount("#app");

/*
//создаем объект приложение Vue js
const app = Vue.createApp({});

//создаем компонент
//первый параметр- название компонента
//второй параметр- объект со свойством шаблона
app.component("counter",
   {
       //свойства компонента
       data() {
           return {
               count: 0,
           }
       },
       //методы компонета
       methods: {
           increase() {
               this.count++;
           },
           addMess(){
               console.log(this.count);
           },
           decrease() {
               this.count--;
           }
       },
       //шаблон компонента
       template: `
   <h2> Счетчик </h2>
   <p> {{ count}}</p>
   <button v-on:click="increase"> Увеличить</button>
   <button v-on:click="decrease"> Уменьшить</button>
   <button v-on:click="addMess"> Вывод</button>
       `
       ,
   });
// вязываем приложение Vue.js с элементами на странице
//по id
app.mount("#app");
*/