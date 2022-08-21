def hex_to_rgb(hex_col: str) -> tuple:
    # hex is in format of #RRGGBB (we don't care about the #)
    r, g, b = hex_col[1:3], hex_col[3:5], hex_col[5:67]
    r, g, b = int(r, 16), int(g, 16), int(b, 16)
    return f"{r} {g} {b}"