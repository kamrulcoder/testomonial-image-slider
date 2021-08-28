
! function(){

    let img  = document.getElementById('customer-img');
    let author  = document.getElementById('customer-name');
    let customerText  = document.getElementById('customer-text');

    let buttons  = document.querySelectorAll('.btn')

    let customers = [];
    let index = 0;


    function Customer(img,author,text){
        this.name = author;
        this.img = img;
        this.text = text;
    }

    function createCustomer(img,author,text){
        let fullImage  = `img/customer-${img}.jpg`
        let customer = new Customer(fullImage,author,text);
        customers.push(customer);        
    }

    // crate customer  function called 
    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')

    createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')

    createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
    createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')

    createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')


    buttons.forEach(btn => {
        btn.addEventListener("click", function(){
            if (btn.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length
                }
                index --;
                author.textContent = customers[index].name;
                customerText.textContent = customers[index].text;
                img.src =customers[index].img;


            }
           else  if (btn.classList.contains('nextBtn')) {
                if (index === customers.length) {
                    index = 0
                }
                index ++;
                author.textContent = customers[index].name;
                customerText.textContent = customers[index].text;
                img.src =customers[index].img;


            }
        })
    })









  
}()