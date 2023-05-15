//select the button to mark all unread as read
const notiBtn = document.querySelector('.mark-notification')
let notiCount = document.querySelector('.notification-count')
let notiCountValue = Number(notiCount.innerHTML)
//select all unread notification 
const notifications = document.querySelectorAll('.notification[data-read="false"]')

//use the button to set the [data-read] to true and notification-status to "read"
notiBtn.addEventListener('click', () =>{
    notifications.forEach(notification =>{
        notification.setAttribute('data-read', 'true')
        let notiStatus = notification.querySelector('.notification-status')
        notiStatus.setAttribute('data-status', 'read')
        notiCountValue = 0
        notiCount.innerHTML = notiCountValue
    })
})

//use the individual notification to set the [data-read] to true
notifications.forEach(notification =>{
    notification.addEventListener('click', () =>{
        notification.setAttribute('data-read', 'true')
        let notiStatus = notification.querySelector('.notification-status')
        let alreadyRead = notiStatus.getAttribute('data-status')
        notiStatus.setAttribute('data-status', 'read')
        if (notiCountValue == 0 || alreadyRead == 'read') {
            return
        }
        notiCountValue--
        notiCount.innerHTML = notiCountValue
    })
})