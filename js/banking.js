document.getElementById('deposite_btn').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite_input').value;
    const totalDeposite = document.getElementById('total_deposite');
    const totalBalance = document.getElementById('total_balance');
    totalDeposite.innerText = parseFloat(totalDeposite.innerText) + parseFloat(depositeInput);
    totalBalance.innerText = parseFloat(totalBalance.innerText) + parseFloat(depositeInput);
    document.getElementById('deposite_input').value = '';
})

document.getElementById('withdraw_btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw_input').value;
    const totalWithdraw = document.getElementById('total_withdraw');
    const totalBalance = document.getElementById('total_balance');
    totalWithdraw.innerText = parseFloat(totalWithdraw.innerText) + parseFloat(withdrawInput);
    totalBalance.innerText = parseFloat(totalBalance.innerText) - parseFloat(withdrawInput);
    document.getElementById('withdraw_input').value = '';
})

function logOut(){
    window.location.href = 'index.html';
}