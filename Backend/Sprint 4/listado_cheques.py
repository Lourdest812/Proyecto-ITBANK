import csv, argparse
from datetime import datetime

# Declaración de parámetros esperados:
parser = argparse.ArgumentParser(description="Consulta de cheques")
parser.add_argument("filename", type=str)
parser.add_argument("dni", type=str)
parser.add_argument("salida", choices=["PANTALLA", "CSV"], type=str)
parser.add_argument("tipo", choices=["EMITIDO", "DEPOSITADO"], type=str)
parser.add_argument("--estado", choices=["PENDIENTE", "APROBADO", "RECHAZADO"], type=str, default=None)   # Opcional
parser.add_argument("--rango_fecha", type=str, default=None)     # Opcional, formato esperado: yyyy-mm-dd:yyyy-mm-dd

# Obtención de parámetros:
args = parser.parse_args()

# Lectura de csv de entrada:
with open(args.filename, "r") as csv_file:
    reader = csv.DictReader(csv_file)
    csv_rows = [row for row in reader]

# Validaciones:
# Si se encuentra un número de cheque repetido en la misma cuenta para un DNI dado, se muestra un mensaje de error indicando el problema
for row in csv_rows:
    repeated_rows = [r for r in csv_rows if r["DNI"] == row["DNI"] and r["NroCheque"] == row["NroCheque"] and r["NumeroCuentaOrigen"] == row["NumeroCuentaOrigen"]]
    if len(repeated_rows) > 1:
        print("ERROR:")
        print(f"  Datos ingresados inválidos, se encontró un número de cheque repetido en la misma cuenta para el DNI {row['DNI']}")
        exit()

# Filtrado de csv por parametros:
filtered_rows = [row for row in csv_rows if row["DNI"] == args.dni and row["Tipo"] == args.tipo]
if args.estado:
    filtered_rows = [row for row in filtered_rows if row["Estado"] == args.estado]
if args.rango_fecha:
    init_date, end_date = args.rango_fecha.split(":")
    init_date_timestamp = int(datetime.strptime(init_date, "%Y-%m-%d").timestamp())
    end_date_timestamp = int(datetime.strptime(end_date, "%Y-%m-%d").timestamp())
    filtered_rows = [row for row in filtered_rows if init_date_timestamp < int(row["FechaOrigen"]) < end_date_timestamp]

# Presentación del resultado:
if args.salida == "CSV":
    current_timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    nuevo = f"{args.dni}{current_timestamp}.csv"
    with open(nuevo, "w", newline="") as csv_file:
        headers = filtered_rows[0].keys()
        writer = csv.DictWriter(csv_file, fieldnames=headers)
        writer.writeheader()
        writer.writerows(filtered_rows)

elif args.salida=="PANTALLA":
    headers = filtered_rows[0].keys()
    for header in headers:
        print(header, end="  |  ")
    print()
    for entry in filtered_rows:
        for key in headers:
            print(entry[key], end="\t")
        print()
