function tinh() {
    let a = Number(document.getElementById("nhapA").value)
    let b = Number(document.getElementById("nhapB").value)
    let tong = a + b
    if (tong < 4) {
        document.getElementById("hienthi").innerText = "Below"
    }
    else {
        document.getElementById("hienthi").innerText = "Over"
    }
}