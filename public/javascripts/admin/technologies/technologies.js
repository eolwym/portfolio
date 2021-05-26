window.addEventListener('DOMContentLoaded', () => {
    const addTechnologyBtn = document.querySelector('.btn-red')
    const form = document.querySelector('.form-container')
    const submit = document.querySelector('#technology-submit-btn')

    const title = document.querySelector('#technologyTitle')
    const image = document.querySelector('#technologyImage')

    addTechnologyBtn.addEventListener('click', async () => {
        fetch(`http://${window.location.hostname}/admin/technologies/form`)
        .then(res => {return res.text()})
        .then(body => {
            form.innerHTML = body
            const close = document.querySelector('.close')
            close.addEventListener('click', () => {
                form.innerHTML = ''
            })
        })
    })


    form.addEventListener('change', ()=> {
        if(title.value && image.value) {
            submit.removeAttribute('disabled')
        } else {
            submit.setAttribute('disabled', 'disabled')
        }

    })

    //-----------
    const editBtn = document.querySelectorAll('.edit')
    const deleteBtn = document.querySelectorAll('.delete')

    editBtn.forEach(btn => {
        btn.addEventListener('click', (e)=> {
            console.log("hihi");
            const id = e.target.id
            fetch(`http://${window.location.hostname}/admin/technologies/form/update/` + id)
            .then(res => {return res.text()})
            .then(body => {
                form.innerHTML = body
                const close = document.querySelector('.close')
                close.addEventListener('click', () => {
                    form.innerHTML = ''
                })
            })
        })
    })

    deleteBtn.forEach(btn => {
        btn.addEventListener('click', (e)=> {
            const confirm = window.confirm("Voulez vraiment supprimer " + e.path[2].childNodes[2].innerText)
            if (confirm == true) {
                const elem = e
                const id = e.target.id
                fetch(`http://${window.location.hostname}/admin/technologies/delete/` + id, {
                    method:"POST"
                })
                .then(res => {
                    if (res.status = 200) {
                        elem.path[2].remove()
                    }
                })
            } else {
                return
            }
        })
    })


})

