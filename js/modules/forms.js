import checkNupInputs from "./checkNumInputs";

const forms = (state) => {
    //получаем все формы и инпуты
    const allForms = document.querySelectorAll('form'),
        allInputs = document.querySelectorAll('input');
    //создаем объект с полями вывода сообщений
    const message = {
        loading: 'Отправка данных ...',
        done: 'Готово!',
        failure: 'Что-то пошло не так ...'
    };
    checkNupInputs('input[name="user_phone"]');
    //ф-я которая очищает все инпуты
    const clearInputs =() => {
        allInputs.forEach(item => {
            item.value = '';
        })
    };
    //ф-я которая получает адрес и данные и отсылает их на сервер
    const postData = async (url , data) => {
        //присваиваем диву с классом статус сообщение о начале отправки
         document.querySelector('.status').textContent = message.loading;
         //отсылаем данные
        const res = await fetch(url,{
            method: 'POST',
            body: data
        });
        //возвращаем ответ от сервера в текстовом формате
        return await res.text();
    };
    //перебираем все формы и на каждый цепляем событие сабмит
    allForms.forEach(item => {
        item.addEventListener('submit',(e)=>{
            //отменияе перезагрузку страницы
            e.preventDefault();
            //создаем див в котором будем выводить сообщение о статусе выполнения отправки данных формы
            let statusMessage = document.createElement('div');
            //добавляем диву раннее созданный класс
            statusMessage.classList.add('status');
            //добавляем див в конец формы
            item.appendChild(statusMessage);
            //получаем данные из каждой формы(т.е. из текущей - которая сейчас используется в слушателе)
            const formData = new FormData(item);
            if(item.getAttribute('data-modal') === 'end'){
                for(let key in state){
                    if(state.hasOwnProperty(key)){
                        formData.append(key, state[key])
                    }

                }
                //code that logged formData keys and values
                // let object = {};
                // formData.forEach(function(value, key){
                //     object[key] = value;
                // });
                // let json = JSON.stringify(object);
                // console.log(json)
            }

            postData('assets/server.php', formData)
                .then(res => {
                    statusMessage.textContent = message.done;
                })
                .catch(()=> statusMessage.textContent = message.failure)
                .finally(()=>{
                    clearInputs();
                    setTimeout(()=>{
                        statusMessage.remove();
                    },3000)
                })
        })
    });

};

export default forms;