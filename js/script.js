const barraMenu = document.querySelector('aside')
const menuBtn = document.querySelector('#menu-btn')
const fecharBtn = document.querySelector('#fechar-btn')
const temaToggler = document.querySelector('.tema-toggler')

// mostrar barra lateral
menuBtn.addEventListener('click', () => {
    barraMenu.style.display = 'block'
})

// ocultar barra lateral
fecharBtn.addEventListener('click', () => {
    barraMenu.style.display = 'none'
})

// escolher tema
temaToggler.addEventListener('click', () => {
    document.body.classList.toggle('tema-escuro-variaveis')

    // seletor atual do icone
    temaToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    temaToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})

// preencher pedidos na tabela
Pedidos.forEach(pedido => {
    const tr = document.createElement('tr')
    const conteudoTr = 
                  `
                  <td>${pedido.nomeProduto}</td>
                  <td>${pedido.numeroProduto}</td>
                  <td>${pedido.statusPagamento}</td>
                  <td class="${pedido.envio === 'Recusado' ? 'perigo' : pedido.envio === 'pendente' ? 'warning' : 'primaria'}">${pedido.envio}</td>
                  <td class="sucesso">Detalhes</td>
                  `

    tr.innerHTML = conteudoTr
    document.querySelector('table tbody').appendChild(tr)
})