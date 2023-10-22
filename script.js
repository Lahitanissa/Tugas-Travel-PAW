document.getElementById('hitung').addEventListener('click', function () {
  const nama = document.getElementById('nama').value
  const tujuan = document.getElementById('tujuan').value
  const harga = parseFloat(document.getElementById('harga').value)
  const jumlah = parseInt(document.getElementById('jumlah').value)
  const isMember = document.getElementById('member').checked
  const diskon = parseFloat(document.getElementById('diskon').value)

  let total = harga * jumlah

  if (isMember) {
    total -= (total * diskon) / 100
  }

  document.getElementById('total').value = 'Rp ' + total.toLocaleString()
})

function showHarga() {
  const tujuanHarga = {
    Jakarta: 200000,
    Surabaya: 150000,
    Bandung: 100000,
    Yogyakarta: 250000,
    Semarang: 220000,
    Malang: 300000,
    // Tambahkan tujuan lainnya di sini
  }

  const tujuan = document.getElementById('tujuan').value
  const harga = document.getElementById('harga')

  if (tujuan in tujuanHarga) {
    harga.value = tujuanHarga[tujuan]
  } else {
    harga.value = 0
  }
}

function showDiskon() {
  let isMember = document.getElementById('member').checked
  let diskonField = document.getElementById('diskonField')
  let diskon = document.getElementById('diskon')

  if (isMember) {
    diskonField.style.display = 'block'
    diskonField.style.visibility = 'visible'
    diskon.value = 20
    console.log(diskon)
  } else {
    diskonField.style.display = 'none'
    diskonField.style.visibility = 'hidden'
  }
}
