import geopy
from geopy.geocoders import Nominatim
from geopy.extra.rate_limiter import RateLimiter

# unção para calcular a distância entre dois pontos
def calculate_distance(home_coords, dest_coords):
    return geopy.distance.distance(home_coords, dest_coords).miles

# Defina a função para estimar o custo de combustível
def estimate_fuel_cost(distance, fuel_efficiency, fuel_price):
    return distance / fuel_efficiency * fuel_price

# Exemplo de uso
home_address = "Rua da Praia, 123, São Paulo, SP"
work_address = "Avenida Paulista, 456, São Paulo, SP"

geolocator = Nominatim(user_agent="Your_Name")
geocode_limited = RateLimiter(geolocator.geocode, min_delay_seconds=1)

home_coords = geocode_limited(home_address).point
work_coords = geocode_limited(work_address).point

distance = calculate_distance(home_coords, work_coords)
print(f"A distância entre a residência e o local de trabalho é de {distance:.2f} milhas")

fuel_efficiency = 25  # milhas por galão
fuel_price = 4.50  # reais por galão

fuel_cost = estimate_fuel_cost(distance, fuel_efficiency, fuel_price)
print(f"O custo estimado de combustível é de R$ {fuel_cost:.2f}")
pip install geopy