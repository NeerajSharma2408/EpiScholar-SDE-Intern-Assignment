import os
import sys

def install_pandas():
    print("Installing pandas...")
    os.system('py -m pip install pandas')
    print("OK")

if sys.argv[1] == 'install_pandas':
    install_pandas()

sys.stdout.flush()