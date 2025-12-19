import { useState, useCallback } from "react";
import "./App.css";

const JUMLAH_MAHASISWA = 10;
const ASPEK = ["kehadiran", "tugas", "uts", "uas"];

export default function App() {
    const [data, setData] = useState(() =>
        Array.from({ length: JUMLAH_MAHASISWA }, (_, i) => ({
            nama: `Mahasiswa ${i + 1}`,
            penilaian: {
                kehadiran: 1,
                tugas: 1,
                uts: 1,
                uas: 1,
            },
        }))
    );

    const handleChange = useCallback((row, aspek, value) => {
        setData((prev) => {
            const newData = [...prev];
            newData[row] = {
                ...newData[row],
                penilaian: {
                    ...newData[row].penilaian,
                    [aspek]: Number(value),
                },
            };
            return newData;
        });
    }, []);

    const handleSave = () => {
        const output = JSON.stringify(data, null, 2);
        console.log(output);
        alert("Data disimpan. Cek console untuk output JSON.");
    };

    return (
        <div className="container">
            <h2>Form Penilaian Mahasiswa</h2>

            <table>
                <thead>
                    <tr>
                        <th>Nama Mahasiswa</th>
                        {ASPEK.map((a) => (
                            <th key={a}>{a.toUpperCase()}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((mhs, i) => (
                        <tr key={mhs.nama}>
                            <td>{mhs.nama}</td>
                            {ASPEK.map((a) => (
                                <td key={a}>
                                    <input
                                        type="number"
                                        min="1"
                                        max="10"
                                        value={mhs.penilaian[a]}
                                        onChange={(e) =>
                                            handleChange(i, a, e.target.value)
                                        }
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={handleSave}>Simpan</button>
        </div>
    );
}
