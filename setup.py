from setuptools import setup, find_packages
import codecs
import os

here = os.path.abspath(os.path.dirname(__file__))

with codecs.open(os.path.join(here, "README.md"), encoding="utf-8") as fh:
    long_description = "\n" + fh.read()

VERSION = '1.0.5'
DESCRIPTION = 'automatic code generator using python'
LONG_DESCRIPTION = "we try to help developers to generate code automatically using python and pass more time in the important things likes their dogs or cats."

# Setting up
setup(
    name="rockman",
    version=VERSION,
    author="Acid Jelly",
    author_email="jhospinal@acidjelly.com",
    description=DESCRIPTION,
    long_description_content_type="text/markdown",  # Specify Markdown content type
    long_description=long_description,
    packages=find_packages(),
    install_requires=['typer','inquirer'],
    keywords=['python', 'react', 'django', 'redux', 'generator', 'code'],
    classifiers=[
        "Development Status :: 1 - Planning",
        "Intended Audience :: Developers",
        "Programming Language :: Python :: 3",
        "Operating System :: Unix",
        "Operating System :: MacOS :: MacOS X",
        "Operating System :: Microsoft :: Windows",
    ],
    entry_points={
        'console_scripts': [
            'rockman = rockman:main'
        ]
    }
)
