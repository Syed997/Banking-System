document.getElementById('deposite_btn').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite_input').value;
    const totalDeposite = document.getElementById('total_deposite');
    const totalBalance = document.getElementById('total_balance');
    totalDeposite.innerText = parseFloat(totalDeposite.innerText) + parseFloat(depositeInput);
    totalBalance.innerText = parseFloat(totalBalance.innerText) + parseFloat(depositeInput);
    document.getElementById('deposite_input').value = '';
})

