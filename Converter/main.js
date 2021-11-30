document.getElementById('kgsInput').addEventListener('input', e => {
    let kgs = e.target.value;
    document.getElementById('lbsOutput').innerHTML = kgs * 2.2046;
})

document.getElementById('feetInput').addEventListener('input', e => {
    let feet = e.target.value;
    document.getElementById('cmsOutput').innerHTML = feet * 30.48;
})