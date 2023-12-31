/* 

Descrizione:
Iniziamo a lavorare alla nostra replica della nota app di messaggistica. L'esercitazione sará divisa in piú giornate, oggi iniziamo a lavorare alla prima milestone che vi
riporto di seguito:

Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall'utente (verdi) e dall'interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto


Consigli:
lavorate ad una task per volta, finita la prima passate alla seconda
ragionate con calma sugli strumenti necessari per svolgere la seconda task,
leggete le pagine della documentazione che vi ho indicato oggi in classe.

*/


//input text,

//input html ce l'ho, associare input a variabile
//stampare la variabile in un nuovo create element


//premi enter e stampa il messaggio, 
//creazione di un nuovo thread come messaggio verde



const { createApp } = Vue;
createApp({
    data() {
        return {
            //input
            //count: '10',
            newMessage: {
                text: '',
                new: false,
            },
            //user contact
            activeContact: 0,
            me: {
                name: 'Sofia',
                avatar: './assets/img/avatar_io.jpg',
            },
            searchText: '',
            //contacts 
            //usare .forEach()?
            contacts: [


                {
                    name: 'Michele',  //contacts.name
                    //Inserisco il percorso dell'img nel html
                    //Qui inserisco solo la parte finale dell'img
                    //e si collega
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent', //true
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent', //true
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received', //false
                        }
                    ],
                },




                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }

            ],
        }
    },
    methods: {



        addMessage() {
            const message = {
                date: new Date().toDateString(),
                message: this.newMessage.text,
                status: 'sent'
            }

            this.contacts[this.activeContact].messages.push(message);

            //svuota il messaggio
            this.newMessage='';

        },

       /*  addnewMess() {
            //console.log('add mess', this.newMessage.text);

            this.contacts[this.activeContact].messages.puh({
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent',
            });

            //svuota il messaggio
            this.newMessage='';

        }, */

        /* replayMessage() {
            setTimeout(() => {
                
                //console.log('add mess', this.newMessage.text);
    
                this.contacts[this.activeContact].messages.setInterval(() => {
                    
                }, interval);({
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                });
            }, ), 
        */

        searchContact(){
            console.log('searching', this.searchText);
            this.contacts.forEach(contact => {
                console.log(contact.name, this.searchText);
                //true o false in base al testo all'interno
                if(contact.name.toLowerCase().includes(this.searchText.toLowerCase)){
                    this.contact[this.index].visible = true;
                    contact.visible = true;
                } else {
                    this.contact[this.index].visible = false;
                    contact.visible = true;
                }
                


            })
        },



        /* changeContact(index) {       // si poteva usare anche un metodo
                                        
            this.activeContact = index;
        }, */

        /* deleteNewMessage(i) {
            console.log(this.newMessage);
            
        },
        aumentaCount(direction){
            console.log('aumenta di 1' + direction);
            this.count++
        },
        diminuisceCount(direction){
            console.log('diminuisce di 1' + direction);
            this.count--
        } */
        
        
    }
}).mount('#app');


