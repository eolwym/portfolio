document.addEventListener('DOMContentLoaded', ()=> {
    const deleteBtn = document.querySelectorAll('.delete')

    deleteBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log(e.path);
            const confirm = window.confirm("Voulez vraiment supprimer " + e.path[2].childNodes[1].childNodes[0].innerText)
            if (confirm == true) {
                const id = e.target.id
                fetch('/admin/achievements/delete/' + id, {
                    method:"POST"
                })
                .then(res => {
                    if (res.status = 200) {
                        e.path[2].remove()
                    }
                })
            }
        })     
    }) 
})